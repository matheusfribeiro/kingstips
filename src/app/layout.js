import './globals.css'
import { Inter } from 'next/font/google'
import { AOSInit } from './hooks/aos'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kings Tips',
  description: 'Sucesso Absoluto KingsTips',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
