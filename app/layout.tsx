import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SuperMART',
  description: 'Online Shopping website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col justify-between bg-gray-200 min-h-screen'>
          <div className='h-fit'>
            <Navbar />
          </div>
          <div className='w-full min-h-full'>
            {children}
          </div>
          <div></div>
        </div>
        </body>
    </html>
  )
}
