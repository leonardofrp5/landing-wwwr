import Image from 'next/image'
import Logo from '../../../../public/logo.svg'

const Loading = () => {
  return (
    <div className='w-full flex-1 flex items-center justify-center gap-6 flex-col'>
      <Image src={Logo} className='aspect-square' alt='With Women We Run' width={140} height={140} priority />
      <div className='loader' />
    </div>
  )
}

export default Loading
