import { ERROR_MESSAGE } from '@/config'

export class CustomError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'CustomError'
  }
}

export const getErrorMessage = (trace: unknown) => {
  if (trace instanceof CustomError) {
    return trace.message
  } else {
    return ERROR_MESSAGE
  }
}
