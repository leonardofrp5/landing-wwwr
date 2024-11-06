'use client'

import { endSession } from '@/actions'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'react-toastify'

interface Props {
  id: string
}

export default function EndSesions ({ id }: Props) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleFinish = () => {
    startTransition(async () => {
      const { error } = await endSession(id)
      if (error) {
        toast.error(error)
        return
      }
      toast.success('Su sesión ha finalizado con exito')
      router.replace('/')
    })
  }

  return (
    <div className='bg-black flex flex-col items-center justify-center p-4'>
      <span className='font-franklinDmcp text-white text-base uppercase max-w-60 text-center'>
        Tus datos ya han sido enviados a tu contacto de emergencia
      </span>
      <span className='font-franklinDmcp text-white text-base uppercase my-5'>
        Corre seguro, corre con adidas
      </span>
      <button
        type='submit'
        disabled={isPending}
        onClick={handleFinish}
        className='flex justify-center pt-1 w-full font-franklinDmcp uppercase bg-white text-base text-black font-bold hover:bg-gray-300 transition animate-ping-subtle-slow shadow-md shadow-white/50'
      >
        {isPending ? 'FINALIZANDO SESION  . . ' : 'FINALIZAR CORRIDA'}
      </button>
    </div>
  )
}
