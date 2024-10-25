'use server'

import { getScheduleTime } from '@/lib/dates'
import { connectToDatabase } from '@/lib/db'
import { session } from '@/models/session'
import { FormValues } from '@/schema/FormSchema'
import { revalidatePath, revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

const COOKIE_KEY = '__s_'
const ERROR_MESSAGE = 'Something went wrong. Please try again later.'

const reloadPage = () => {
  revalidatePath('/')
  revalidateTag('/')
}

export const getActiveSession = async () => {
  try {
    const cookieStore = cookies()
    const id = cookieStore.get(COOKIE_KEY)?.value ?? null

    if (!id) return null

    await connectToDatabase()

    await session.findById(id)

    return id
  } catch (trace) {
    console.log({ trace, label: 'GET_ACTIVE_SESSION' })
    return null
  }
}

export const startSession = async ({ schedule, terms, ...values }: FormValues) => {
  try {
    const cookieStore = cookies()
    await connectToDatabase()

    const scheduledTime = getScheduleTime(schedule)

    console.log({
      ...values,
      scheduledTime
    })

    const saveSession = await session.create({
      ...values,
      scheduledTime
    })

    if (saveSession._id) {
      cookieStore.set({
        value: `${saveSession._id as string}`,
        name: COOKIE_KEY,
        httpOnly: true
      })
    }

    reloadPage()
    return { error: null }
  } catch (trace) {
    console.log({ trace, label: 'START_SESSION' })
    return { error: ERROR_MESSAGE }
  }
}

export const endSession = async (id: string) => {
  try {
    const cookieStore = cookies()
    await connectToDatabase()

    const currentSession = await session.findById(id)

    if (currentSession) {
      currentSession.activeSession = false
      currentSession.isVerified = true
      await currentSession.save()
    }

    cookieStore.delete(COOKIE_KEY)
    reloadPage()
    return { error: null }
  } catch (trace) {
    console.log({ trace, label: 'END_SESSION' })
    return { error: ERROR_MESSAGE }
  }
}
