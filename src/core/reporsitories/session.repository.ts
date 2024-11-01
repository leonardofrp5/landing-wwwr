import { connectToDatabase } from '@/lib/db'
import { session } from '../models/session'
import { logger } from '@/lib/logger'
import { FormValues } from '@/schema/FormSchema'
import { getScheduleTime } from '@/lib/dates'
import mongoose from 'mongoose'

import { CustomError } from '@/lib/customError'
import { contactMessagesTemplate, userMessagesTemplate } from '@/lib/msm-text'
import { sendSMS } from '@/lib/asw-sns'

export const getSessionById = async (id: string) => {
  await connectToDatabase()
  return session.findById(id)
}

export const updateSession = async (id: string) => {
  try {
    const currentSession = await getSessionById(id)

    if (!currentSession) {
      throw new CustomError('No encontramos ninguna sesion activa.')
    }

    currentSession.activeSession = false
    currentSession.isVerified = true
    await currentSession.save()
  } catch (trace) {
    logger({ trace, label: 'UPDATE_SESSION', payload: { id } })
    throw trace
  }
}

export const createSesion = async (values: FormValues) => {
  await connectToDatabase()
  const transaction = await mongoose.startSession()
  transaction.startTransaction()

  try {
    const { schedule, terms, ...restOfValues } = values

    const scheduledTime = getScheduleTime(schedule)

    const saveSession = await session.create([{ ...restOfValues, scheduledTime }], {
      session: transaction
    })

    const send = await Promise.allSettled([sendSMS(values.phoneNumber, userMessagesTemplate(values.name)), sendSMS(values.emergencyPhoneNumber, contactMessagesTemplate({ userName: values.name, location: values.location, kms: values.kms }))])

    if (!send.every(promise => promise.status === 'fulfilled')) {
      await transaction.abortTransaction()
      await transaction.endSession()
      throw new CustomError('Por favor verifica que el número de telefono ingresado sea valido.')
    }

    await transaction.commitTransaction()
    await transaction.endSession()

    return saveSession[0]._id?.toString()
  } catch (trace) {
    await transaction.abortTransaction()
    await transaction.endSession()
    logger({ trace, label: 'INIT_SESSION', payload: { ...values } })
    throw trace
  }
}
