'use server'

import { connectToDatabase } from '@/lib/db'
import { session } from '@/models/session'
import { FormValues } from '@/schema/FormSchema'
import { revalidatePath, revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

const reloadPage = () => {
  revalidatePath('/')
  revalidateTag('/')
}

export const getActiveSession = async () => {
  try {
    await connectToDatabase()
    const cookieStore = cookies()
    const id = cookieStore.get('__s')
    return { error: null, id: id ?? null }
  } catch (e) {
    return { error: 'Something went wrong. Please try again later.' }
  }
}

export const startSession = async (values: FormValues) => {
  try {
    const cookieStore = cookies()
    await connectToDatabase()

    const saveSession = await session.create({
      ...values
    })

    if (saveSession._id) {
      cookieStore.set({
        value: `${saveSession._id as string}`,
        name: '__s',
        httpOnly: true,
        secure: true,
        path: '/'
      })
    }

    reloadPage()
    return { error: null }
  } catch (e) {
    return { error: 'Something went wrong. Please try again later.' }
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

    cookieStore.delete('__s')
    reloadPage()
    return { error: null }
  } catch (e) {
    return { error: 'Something went wrong. Please try again later.' }
  }
}
