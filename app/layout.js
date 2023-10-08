import './globals.css'
import { poppins } from './fonts'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Jet Protocol: Transform Your DeFi Governance Experience',
  description: 'Jet Protocol revolutionizes decentralized finance (DeFi) governance. Experience open-source, secure borrowing, and lending on the efficient Solana blockchain.',
  url: 'https://jet-protocol-lovat.vercel.app/',
  image: 'https://jet-protocol-lovat.vercel.app/jetprotocol.svg',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
