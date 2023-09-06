import localFont from 'next/font/local'
import { Nunito, Urbanist } from 'next/font/google'

export const nunito = Nunito({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  weight: ['400', '500', '700'],
})
export const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
export const IBM = localFont({ src: '../assets/fonts/IBM.ttf' })
