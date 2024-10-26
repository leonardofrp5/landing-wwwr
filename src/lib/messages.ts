import twilio from 'twilio'
import { logger } from './logger'

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID as string, process.env.TWILIO_AUTH_TOKEN as string)

export const sendSMS = async (to: string, body: string) => {
  try {
    await twilioClient.messages.create({
      body,
      from: `whatsapp:${process.env.TWILIO_FROM_PHONE as string}`,
      to: `whatsapp:+57${to}`
    })

    return true
  } catch (error) {
    logger({ label: 'WHATSAPP_ERROR', trace: error })
    return false
  }
}
