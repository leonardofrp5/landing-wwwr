import Image from 'next/image'
import LogoAdidas from '../../public/logo-adidas.jpg'
import Logo from '../../public/logo.svg'
import RegisterForm from '@/components/form'

export default function Home () {
  return (
    <div className='min-h-screen flex justify-between bg-black flex-col items-center py-6 px-8'>
      <header className='flex flex-col justify-center items-center mb-4'>
        <Image src={LogoAdidas} alt='With Women We Run' width={30} height={20} />
        <Image src={Logo} alt='With Women We Run' width={200} height={100} />
      </header>
      <RegisterForm />
      <div className='flex flex-col text-white text-center mt-8'>
        <span className='font-franklinDmcp'>LÍNEAS DE ATENCIÓN LOCAL:</span>
        <span className='font-franklinBkcp'>300 198 1392 - 678 78 8889</span>
      </div>
    </div>
  )
}
