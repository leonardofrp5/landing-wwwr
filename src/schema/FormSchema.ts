import { z } from 'zod';

const FormSchema = z.object({
  username: z
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
  rh: z.string({
    required_error: 'El tipo de sangre es requerido'
  }),
  zone: z.string({
    required_error: 'La zona es requerido'
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
    required_error: 'El horario es requerido'
  }),
  contact: z
    .string()
    .min(1, {
      message: 'El contacto de emergencia es requerido'
    })
    .max(10, {
      message: 'No debe tener más de 10 caracteres'
    })
});

export { FormSchema };
