import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ICM - Interclass Manager',
  description: 'Gerenciador de torneios interclasses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  )
}
