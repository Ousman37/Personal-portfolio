import Header from '@/components/header';
import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import AppearanceChanger from '@/components/appearance-changer';
import AppearanceContextProvider from '@/context/appearance-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ethmane Didi | Developer Portfolio',
  description:
    'Explore the developer journey of Ethmane Didi through a portfolio showcasing innovative projects and a diverse skill set in web development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 relative pt-28 sm:pt-36 dark:bg-gray-800 dark:text-gray-200 `}
      >
        <div className="bg-indigo-500/20 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-indigo-700/30"></div>
        <div className="bg-pink-500/20 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-pink-700/30"></div>
        <AppearanceContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <AppearanceChanger />
          </ActiveSectionContextProvider>
        </AppearanceContextProvider>
      </body>
    </html>
  );
}
