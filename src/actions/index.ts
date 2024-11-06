'use server'

import { ERROR_MESSAGE } from '@/config'
import { createSesion, getSessionByPhone, updateSession } from '@/core/reporsitories/session.repository'
import { getErrorMessage } from '@/lib/customError'
import { FormValues } from '@/schema/form.schema'
import { PhoneSchema } from '@/schema/phone.schema'
import { revalidatePath, revalidateTag } from 'next/cache'
import { notFound } from 'next/navigation'

const reloadPage = () => {
  revalidatePath('/')
  revalidateTag('/')
}

export const getActiveSession = async (phone: string) => {
  try {
    const validateFields = PhoneSchema.safeParse({
      phoneNumber: phone
    })

    if (!validateFields.success) notFound()
    const currentSession = await getSessionByPhone(phone)
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    return currentSession ? currentSession._id?.toString() : null
  } catch {
    notFound()
  }
}

export const startSession = async (values: FormValues) => {
  try {
    const id = await createSesion(values)
    if (!id) return { error: ERROR_MESSAGE }
    reloadPage()
    return { error: null }
  } catch (trace) {
    return { error: getErrorMessage(trace) }
  }
}

export const endSession = async (id: string) => {
  try {
    await updateSession(id)
    return { error: null }
  } catch (trace) {
    return { error: getErrorMessage(trace) }
  }
}
