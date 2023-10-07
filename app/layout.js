import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'] })

export const metadata = {
  title: 'JetProtocol',
  description: 'Next-gen DeFi protocol for stablecoins',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
