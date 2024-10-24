import { EndSessionsProps } from './interfaces'

export default function EndSesions ({ setSent }: EndSessionsProps) {
  const handleFinish = () => {
    setSent(false)
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
        onClick={handleFinish}
        className='flex justify-center pt-1 w-full font-franklinDmcp uppercase bg-white text-base text-black font-bold hover:bg-gray-300 transition'
      >
        Finaliza tu corrida
      </button>
    </div>
  )
}
