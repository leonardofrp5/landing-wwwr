import phone from 'phone'
import { z } from 'zod'

export const PhoneSchema = z.object({
  phoneNumber: z.string().regex(/^\d+$/, {
    message: 'El campo solo debe contener números'
  }).refine(val => phone(val, { country: 'COL' }).isValid, {
    message: 'Número de teléfono inválido'
  })
})

export type PhoneValues = z.infer<typeof PhoneSchema>
