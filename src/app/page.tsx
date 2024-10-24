import Image from 'next/image'
import LogoAdidas from '../../public/logo-adidas.jpg'
import Logo from '../../public/logo.svg'
import RegisterForm from '@/components/form'
import { getActiveSession } from '@/actions'
import EndSesions from '@/components/end-sesions'

const Home = async () => {
  const id = await getActiveSession()

  return (
    <>
      <header className='flex flex-col justify-center items-center mb-4'>
        <Image className='aspect-[30/20]' src={LogoAdidas} alt='With Women We Run' width={30} height={20} priority />
        <Image src={Logo} className='aspect-square' alt='With Women We Run' width={150} height={150} priority />
      </header>
      {id ? <EndSesions id={id} /> : <RegisterForm />}
      <div className='flex flex-col text-white text-center mt-8'>
        <span className='font-franklinDmcp'>LÍNEAS DE ATENCIÓN LOCAL:</span>
        <span className='font-franklinBkcp'>300 198 1392 - 678 78 8889</span>
      </div>
    </>
  )
}

export default Home
