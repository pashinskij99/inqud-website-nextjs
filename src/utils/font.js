import localFont from 'next/font/local'
import { Urbanist } from 'next/font/google'

export const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '500', '700'] })
export const IBM = localFont({ src: '../assets/fonts/IBM.ttf' })

