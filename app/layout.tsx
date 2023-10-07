import './globals.css'
import Header from '@/components/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ethmane Didi | Developer Portfolio',
  description: 'Explore the developer journey of Ethmane Didi through a portfolio showcasing innovative projects and a diverse skill set in web development.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px]`}
      >
        {/* pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 */}
        <div className="bg-[#d0f0c0] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#749475]"></div>
        <div className="bg-[#c0d0f0] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#475374]"></div>
        
        <Header/>
        {children}
        </body>
    </html>
  )
}
