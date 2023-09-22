import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import LayoutComponent from '@/components/Layout/LayoutComponent'
import { nunito } from '@/utils/font'

import 'swiper/css'
import 'swiper/css/scrollbar'
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: 'Ingud',
  robots: 'noindex,nofollow',
}

export default async function RootLayout({ children, params: { locale } }) {
  let messages
  try {
    messages = (await import(`../../dictionaries/${locale}.json`)).default
    // console.log(messages);
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <head>
        <meta name='title' content='Ingud' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='noindex,nofollow' />
      </head>

      <body className={nunito.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutComponent>{children}</LayoutComponent>
          <div id='calendly-model-wrapper' />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
