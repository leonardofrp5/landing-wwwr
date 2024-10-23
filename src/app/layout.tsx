import type { Metadata } from 'next';
import './globals.css';
import { franklinBkcp, franklinDmcp, Peregrin } from './fonts';

export const metadata: Metadata = {
  title: 'With Women We Run',
  description: 'Corre seguro!',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={`${franklinBkcp.variable} ${franklinDmcp.variable} ${Peregrin.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
