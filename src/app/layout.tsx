import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '../sections/common/header'
import { Footer } from '../sections/common/footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Os Oito'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className} scroll-smooth antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
