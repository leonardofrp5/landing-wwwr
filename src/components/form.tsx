'use client'

import { FormSchema, FormValues } from '@/schema/form.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { BloodType, Zones, timeWorkOut } from './constants'
import { IlistKms } from './interfaces'
import { Button, buttonVariants } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'

import { startSession } from '@/actions'
import Link from 'next/link'
import { Checkbox } from './ui/checkbox'
import { cn } from '@/lib/utils'

export default function RegisterForm ({ phone }: { phone?: string }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      phoneNumber: phone ?? '',
      rh: undefined,
      location: undefined,
      kms: '',
      schedule: undefined,
      emergencyPhoneNumber: '',
      terms: false
    }
  })

  const [isPending, startTransition] = useTransition()

  const onSubmit = (values: FormValues) => {
    startTransition(async () => {
      const { error } = await startSession(values)
      if (error) toast.error(error)
    })
  }

  return (
    <Form {...form}>
      <h1 className='font-franklinDmcp text-white text-center text-lg mb-5 font-bold max-w-64'>
        REGÍSTRATE Y COMPARTE TU ENTRENAMIENTO PARA CORRER SEGURO
      </h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-md flex flex-col gap-3'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='min-h-[99.2px]'>
              <FormLabel className='font-franklinDmcp text-lg flex justify-center text-white '>
                Nombre completo:
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  id='name'
                  className='font-franklinBkcp text-lg text-white rounded-none m-[0px]'
                  {...field}
                />
              </FormControl>
              <FormMessage className='font-franklinBkcp  mx-0 my-0' />
            </FormItem>
          )}
        />
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
                  readOnly
                  className='font-franklinBkcp text-lg text-white rounded-none'
                  {...field}
                />
              </div>
              <FormMessage className='font-franklinBkcp  mt-2' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='rh'
          render={({ field }) => (
            <FormItem className='min-h-[99.2px]'>
              <FormLabel className='font-franklinDmcp text-lg flex justify-center text-white '>RH:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className='font-franklinBkcp text-lg w-full text-white border rounded-none border-white rounded-1  h-10'>
                  <SelectValue placeholder='Selecione el RH' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {BloodType.map(({ value, label }: IlistKms) => (
                      <SelectItem key={value} value={value} className='font-franklinBkcp text-lg'>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage className='font-franklinBkcp  mt-2' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem className='min-h-[99.2px]'>
              <FormLabel className='font-franklinDmcp text-lg flex justify-center text-white '>
                Zona en la que corres:
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className='font-franklinBkcp text-lg w-full text-white border rounded-none border-white rounded-1  h-10'>
                  <SelectValue placeholder='Selecione una zona' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {Zones.map(({ value, label }: IlistKms) => (
                      <SelectItem key={value} value={value} className='font-franklinBkcp text-lg'>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage className='font-franklinBkcp mt-2' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='kms'
          render={({ field }) => (
            <FormItem className='min-h-[99.2px]'>
              <FormLabel className='font-franklinDmcp text-lg flex justify-center text-white '>
                Número de kilómetros:
              </FormLabel>
              <Input
                type='number'
                id='kms'
                className='font-franklinBkcp text-lg text-white rounded-none'
                {...field}
              />
              <FormMessage className='font-franklinBkcp  mt-2' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='schedule'
          render={({ field }) => (
            <FormItem className='min-h-[99.2px]'>
              <FormLabel className='font-franklinDmcp text-lg flex justify-center text-white '>
                Tiempo de entrenamiento:
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className='font-franklinBkcp text-lg w-full text-white border rounded-none border-white rounded-1 h-10'>
                  <SelectValue placeholder='Selecione una zona' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {timeWorkOut.map(({ value, label }: IlistKms) => (
                      <SelectItem key={value} value={value} className='font-franklinBkcp text-lg'>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage className='font-franklinBkcp mt-2' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='emergencyPhoneNumber'
          render={({ field }) => (
            <FormItem className='min-h-[99.2px]'>
              <FormLabel className='font-franklinDmcp text-lg flex justify-center text-white '>
                Contacto de emergencia:
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
        <FormField
          control={form.control}
          name='terms'
          render={({ field }) => (
            <>
              <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-none border p-4'>
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} className='bg-white' />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel className='font-franklinDmcp text-lg text-white '>
                    He leído y acepto los {' '}
                    <Link
                      href='/TRATAMIENTO-DE-DATOS-WWWR.pdf'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='underline'
                    >
                      Términos y Condiciones de With Women We Run y la Política de privacidad
                    </Link>
                  </FormLabel>
                </div>
              </FormItem>
              <FormMessage className='font-franklinBkcp  mt-2' />
            </>
          )}
        />

        <div className='flex gap-2 items-center mt-5'>
          <Link
            className={cn(buttonVariants({ className: 'font-franklinDmcp text-lg w-full  py-2 font-bold rounded-none !bg-transparent text-white hover:text-slate-300 border-white max-w-fit px-8', variant: 'outline' }), {
              'pointer-events-none': isPending
            })}
            href='/'
          >
            SALIR
          </Link>
          <Button
            disabled={isPending}
            type='submit'
            className='font-franklinDmcp text-lg w-full bg-white text-black py-2 font-bold rounded-none hover:bg-gray-300 transition'
          >
            {isPending ? 'INICIANDO SESION  . . ' : '¡CORRE SEGURO AHORA!'}
          </Button>
        </div>

      </form>
    </Form>
  )
}
