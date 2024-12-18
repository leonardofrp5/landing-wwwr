import phone from 'phone'
import { z } from 'zod'

export const FormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'El nombre es requerido'
    })
    .min(2, {
      message: 'Debe tener 2 o más caracteres'
    })
    .max(50, {
      message: 'No debe tener más de 50 caracteres'
    }),
  phoneNumber: z.string().refine(val => phone(val, { country: 'COL' }).isValid, {
    message: 'Número de teléfono inválido'
  }),
  rh: z.string({
    required_error: 'El tipo de sangre es requerido'
  }),
  location: z.string({
    required_error: 'La zona es requerida'
  }),
  kms: z
    .string()
    .min(1, {
      message: 'La cantidad de kilometros es requerido'
    })
    .max(2, {
      message: 'No debe tener más de 2 caracteres'
    }),
  schedule: z.string({
    required_error: 'El tiempo de entrenamiento es requerido'
  }),
  emergencyPhoneNumber: z.string().refine(val => phone(val, { country: 'COL' }).isValid, {
    message: 'Número de teléfono es inválido'
  }),
  terms: z.boolean().refine(val => val, {
    message: 'Es necesario aceptar Términos y Condiciones'
  })
})

export type FormValues = z.infer<typeof FormSchema>
