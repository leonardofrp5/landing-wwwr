'use client';

import { FormEvent } from 'react';
import { Input } from './ui/input';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem, SelectGroup } from './ui/select';
import { BloodType, Kms, Zones } from './constants';
import { IlistKms } from './interfaces';
import { Button } from './ui/button';

export default function Form() {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  // console.log(e);
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div>
        <label className="font-Franklin font-bold flex justify-center text-white mb-4">
          Nombre completo:
        </label>
        <Input type="text" id="name" className="text-white rounded-none" />
      </div>
      <div>
        <label className="flex justify-center text-white mb-4">RH:</label>
        <Select>
          <SelectTrigger className="w-full text-white border rounded-none border-white rounded-1">
            <SelectValue placeholder="Selecione el RH" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {BloodType.map(({ value, label }: IlistKms) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="flex justify-center text-white mb-4">Zona en la que corres:</label>
        <Select>
          <SelectTrigger className="w-full text-white border rounded-none border-white rounded-1">
            <SelectValue placeholder="Selecione una zona" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Zones.map(({ value, label }: IlistKms) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="flex justify-center text-white mb-4">Número de kilómetros:</label>
        <Select>
          <SelectTrigger className="w-full text-white border rounded-none border-white rounded-1">
            <SelectValue placeholder="Selecione los kilometros" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Kms.map(({ value, label }: IlistKms) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="flex justify-center text-white mb-4">Horario:</label>
        <Input type="time" id="schedule" className="text-white rounded-none" />
      </div>
      <div>
        <label className="flex justify-center text-white mb-4">Contacto de emergencia:</label>
        <Input type="number" id="contact" className="text-white rounded-none" />
      </div>
      <Button
        type="submit"
        className="w-full bg-white text-black py-2 mt-5 font-bold rounded-none hover:bg-gray-300 transition"
      >
        ¡CORRE SEGURO AHORA!
      </Button>
    </form>
  );
}
