'use client';

import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem, SelectGroup } from './ui/select';
import { BloodType, Zones, timeWorkOut } from './constants';
import { IlistKms } from './interfaces';
import { Button } from './ui/button';
import { FormControl, FormField, FormItem, FormLabel, Form, FormMessage } from './ui/form';
import { FormSchema } from '@/schema/FormSchema';

export default function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      phoneNumber: '',
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
  {
    /* <EndSesions /> */
  }
  return (
    <Form {...form}>
      <h1 className="font-franklinDmcp text-white text-center text-lg mb-5 font-bold max-w-64">
        REGÍSTRATE Y COMPARTE TU ENTRENAMIENTO PARA CORRER SEGURO
      </h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md flex flex-col gap-3">
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
              <FormMessage className="font-franklinBkcp  mx-0 my-0" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="min-h-[99.2px]">
              <FormLabel className="font-franklinDmcp text-lg flex justify-center text-white ">
                Número de celular:
              </FormLabel>
              <div className="flex items-center gap-2">
                <span className="font-franklinDmcp pt-2 text-[25px] h-10 w-12 flex justify-center items-center text-white/50">
                  <span>+ 57</span>
                </span>
                <Input
                  type="number"
                  id="contact"
                  className="font-franklinBkcp text-lg text-white rounded-none"
                  {...field}
                />
              </div>
              <FormMessage className="font-franklinBkcp  mt-2" />
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
              <FormMessage className="font-franklinBkcp  mt-2" />
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
              <FormMessage className="font-franklinBkcp mt-2" />
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
              <FormMessage className="font-franklinBkcp  mt-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="schedule"
          render={({ field }) => (
            <FormItem className="min-h-[99.2px]">
              <FormLabel className="font-franklinDmcp text-lg flex justify-center text-white ">
                Tiempo de entrenamiento:
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="font-franklinBkcp text-lg w-full text-white border rounded-none border-white rounded-1">
                  <SelectValue placeholder="Selecione una zona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {timeWorkOut.map(({ value, label }: IlistKms) => (
                      <SelectItem key={value} value={value} className="font-franklinBkcp text-lg">
                        {label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage className="font-franklinBkcp mt-2" />
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
              <div className="flex items-center gap-2">
                <span className="font-franklinDmcp pt-2 text-[25px] h-10 w-12 flex justify-center items-center text-white/50">
                  <span>+ 57</span>
                </span>
                <Input
                  type="number"
                  id="contact"
                  className="font-franklinBkcp text-lg text-white rounded-none"
                  {...field}
                />
              </div>
              <FormMessage className="font-franklinBkcp  mt-2" />
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
