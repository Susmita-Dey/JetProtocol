import './globals.css'
import { poppins } from './fonts'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'JetProtocol',
  description: 'Next-gen DeFi protocol for stablecoins',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
