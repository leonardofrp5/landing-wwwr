import phone from 'phone'
import { z } from 'zod'

export const PhoneSchema = z.object({
  phoneNumber: z.string().refine(val => phone(val, { country: 'COL' }).isValid, {
    message: 'Número de teléfono inválido'
  })
})

export type PhoneValues = z.infer<typeof PhoneSchema>
