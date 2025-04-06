import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Titan Defense Technologies',
  description: 'Advanced defense solutions for modern warfare.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <header className="w-full flex flex-col items-center py-6 bg-black z-50">
          <Image
            src="/images/logo.png"
            alt="Titan Defense Logo"
            className="mx-auto w-[220px] sm:w-[320px]"
            width={320}
            height={320}
            priority
          />
          <nav className="mt-4 flex flex-wrap justify-center gap-6 text-sm sm:text-base font-bold uppercase">
            <Link href="/">HOME</Link>
            <Link href="/technology">TECHNOLOGY</Link>
            <Link href="/mission">MISSION</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
