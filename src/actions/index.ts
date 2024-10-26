'use server'

import { COOKIE_KEY, ERROR_MESSAGE } from '@/config'
import { createSesion, getSessionById, updateSession } from '@/core/reporsitories/session.repository'
import { getErrorMessage } from '@/lib/customError'
import { FormValues } from '@/schema/FormSchema'
import { revalidatePath, revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

const reloadPage = () => {
  revalidatePath('/')
  revalidateTag('/')
}

export const getActiveSession = async () => {
  try {
    const cookieStore = cookies()
    const id = cookieStore.get(COOKIE_KEY)?.value

    if (!id) return null

    const currentSession = await getSessionById(id)

    return currentSession ? id : null
  } catch (trace) {
    return null
  }
}

export const startSession = async (values: FormValues) => {
  try {
    const id = await createSesion(values)
    if (!id) return { error: ERROR_MESSAGE }
    const cookieStore = cookies()
    cookieStore.set({ name: COOKIE_KEY, value: id.toString(), httpOnly: true })
    reloadPage()
    return { error: null }
  } catch (trace) {
    return { error: getErrorMessage(trace) }
  }
}

export const endSession = async (id: string) => {
  try {
    await updateSession(id)
    const cookieStore = cookies()
    cookieStore.delete(COOKIE_KEY)
    reloadPage()
    return { error: null }
  } catch (trace) {
    return { error: getErrorMessage(trace) }
  }
}
