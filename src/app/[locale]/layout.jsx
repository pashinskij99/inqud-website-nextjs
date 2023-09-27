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
  other: {
    'trustpilot-one-time-domain-verification-id': '5c9328f8-1c30-4679-8f8a-0b7b3c2853d0',
  },
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
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
