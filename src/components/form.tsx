'use client';

import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem, SelectGroup } from './ui/select';
import { BloodType, Zones } from './constants';
import { IlistKms } from './interfaces';
import { Button } from './ui/button';
import { FormControl, FormField, FormItem, FormLabel, Form, FormMessage } from './ui/form';
import { FormSchema } from '@/schema/FormSchema';

export default function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      rh: undefined,
      zone: undefined,
      kms: '',
      schedule: undefined,
      contact: ''
    }
  });

  const onSubmit = (value: z.infer<typeof FormSchema>) => {
    console.log(value);
  };

  return (
    <Form {...form}>
      <h1 className="font-franklinDmcp text-white text-center text-lg mb-5 font-bold max-w-64">
        REGÍSTRATE Y COMPARTE TU ENTRENAMIENTO PARA CORRER SEGURO
      </h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="min-h-[99.2px]">
              <FormLabel className="font-franklinDmcp text-lg flex justify-center text-white ">
                Nombre completo:
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="name"
                  className="font-franklinBkcp text-lg text-white rounded-none m-[0px]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-franklinBkcp text-red-300 mx-0 my-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rh"
          render={({ field }) => (
            <FormItem className="min-h-[99.2px]">
              <FormLabel className="font-franklinDmcp text-lg flex justify-center text-white ">RH:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="font-franklinBkcp text-lg w-full text-white border rounded-none border-white rounded-1">
                  <SelectValue placeholder="Selecione el RH" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {BloodType.map(({ value, label }: IlistKms) => (
                      <SelectItem key={value} value={value} className="font-franklinBkcp text-lg">
                        {label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage className="font-franklinBkcp text-red-300 mt-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zone"
          render={({ field }) => (
            <FormItem className="min-h-[99.2px]">
              <FormLabel className="font-franklinDmcp text-lg flex justify-center text-white ">
                Zona en la que corres:
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="font-franklinBkcp text-lg w-full text-white border rounded-none border-white rounded-1">
                  <SelectValue placeholder="Selecione una zona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {Zones.map(({ value, label }: IlistKms) => (
                      <SelectItem key={value} value={value} className="font-franklinBkcp text-lg">
                        {label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage className="font-franklinBkcp text-red-300 mt-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="kms"
          render={({ field }) => (
            <FormItem className="min-h-[99.2px]">
              <FormLabel className="font-franklinDmcp text-lg flex justify-center text-white ">
                Número de kilómetros:
              </FormLabel>
              <Input
                type="number"
                id="kms"
                className="font-franklinBkcp text-lg text-white rounded-none px-0 py-0"
                {...field}
              />
              <FormMessage className="font-franklinBkcp text-red-300 mt-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="schedule"
          render={({ field }) => (
            <FormItem className="min-h-[99.2px]">
              <FormLabel className="font-franklinDmcp text-lg flex justify-center text-white ">
                Horario:
              </FormLabel>
              <Input
                type="time"
                id="schedule"
                className="font-franklinBkcp text-lg text-white rounded-none"
                {...field}
              />
              <FormMessage className="font-franklinBkcp text-red-300 mt-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem className="min-h-[99.2px]">
              <FormLabel className="font-franklinDmcp text-lg flex justify-center text-white ">
                Contacto de emergencia:
              </FormLabel>
              <Input
                type="number"
                id="contact"
                className="font-franklinBkcp text-lg text-white rounded-none"
                {...field}
              />
              <FormMessage className="font-franklinBkcp text-red-300 mt-2" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="font-franklinDmcp text-lg w-full bg-white text-black py-2 mt-5 font-bold rounded-none hover:bg-gray-300 transition"
        >
          ¡CORRE SEGURO AHORA!
        </Button>
      </form>
    </Form>
  );
}
