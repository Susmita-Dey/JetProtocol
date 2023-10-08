import { Poppins, Playfair_Display } from 'next/font/google'

export const poppins = Poppins({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
})

export const playfair_display = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
})