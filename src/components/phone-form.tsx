'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
// import { Button } from './ui/button'
import { Form, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

import { PhoneSchema, PhoneValues } from '@/schema/phone.schema'
import { useRouter } from 'next/navigation'

export default function PhoneForm () {
  const form = useForm<PhoneValues>({
    resolver: zodResolver(PhoneSchema),
    defaultValues: {
      phoneNumber: ''
    }
  })

  const navigation = useRouter()

  const onSubmit = ({ phoneNumber }: PhoneValues) => {
    navigation.push(`/session/${phoneNumber}`)
  }

  return (
    <div>
      <Form {...form}>
        <h1 className='font-franklinDmcp text-white text-center text-2xl mb-5 font-bold '>
          INGRESA TU NÚMERO DE CELULAR
        </h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-md flex flex-col gap-3'>
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem className='min-h-[99.2px]'>
                <FormLabel className='font-franklinDmcp text-lg flex justify-center text-white '>
                  Número de celular:
                </FormLabel>
                <div className='flex items-center gap-2'>
                  <span className='font-franklinDmcp pt-2 text-[25px] h-10 w-12 flex justify-center items-center text-white/50'>
                    <span>+ 57</span>
                  </span>
                  <Input
                    type='number'
                    id='contact'
                    className='font-franklinBkcp text-lg text-white rounded-none'
                    {...field}
                  />
                </div>
                <FormMessage className='font-franklinBkcp  mt-2' />
              </FormItem>
            )}
          />

          {/* <Button
            type='submit'
            disabled
            className='font-franklinDmcp text-lg w-full bg-white text-black py-2 font-bold rounded-none hover:bg-gray-300 transition'
          >
            INGRESAR
          </Button> */}
        </form>
      </Form>
    </div>
  )
}
