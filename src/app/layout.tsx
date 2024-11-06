import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { franklinBkcp, franklinDmcp, Peregrin } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'With Women We Run',
  description: 'Corre seguro!',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${franklinBkcp.variable} ${franklinDmcp.variable} ${Peregrin.variable} antialiased`}>
        <ToastContainer theme='colored' />
        <div className='min-h-screen flex justify-between bg-black flex-col items-center py-6 px-8'>
          {children}
        </div>
      </body>
    </html>
  )
}
