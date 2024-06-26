import type { Metadata } from 'next'
import { Oswald, Roboto } from 'next/font/google'
import './globals.css'
import NavBar from './components/Navbar'
import Footer from './components/Footer'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Dr Crisariana Gamez',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${roboto.variable} `}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
