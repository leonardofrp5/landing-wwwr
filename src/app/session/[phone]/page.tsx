import { getActiveSession } from '@/actions'
import EndSesions from '@/components/end-sesions'
import RegisterForm from '@/components/form'
import Image from 'next/image'
import LogoWwwr from '../../../../public/logo-wwwr.svg'
import Logo from '../../../../public/logo.svg'

const Session = async ({ params }: { params: {
  phone: string
} }) => {
  const { phone } = params
  const id = await getActiveSession(phone)

  return (
    <>
      <header className='flex flex-col justify-center items-center mb-4'>
        <Image
          src={LogoWwwr}
          className='aspect-square'
          alt='With Women We Run'
          width={200}
          height={200}
          priority
        />
      </header>

      {id ? <EndSesions id={id} /> : <RegisterForm phone={phone} />}
      <div className='flex flex-col text-white text-center mt-8 h-full items-center'>
        <span className='font-franklinDmcp'>LÍNEAS DE ATENCIÓN LOCAL:</span>
        <span className='font-franklinBkcp'>300 198 1392 - 678 78 8889</span>
        <Image
          src={Logo}
          className='aspect-square mt-3'
          alt='With Women We Run'
          width={60}
          height={60}
          priority
        />
      </div>
    </>
  )
}

export default Session