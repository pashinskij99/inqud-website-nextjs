import '@/styles/index.scss'

import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import LayoutComponent from '@/components/Layout/LayoutComponent'
import { nunito } from '@/utils/font'

import 'swiper/css'
import 'swiper/css/scrollbar'
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: 'Inqud',
  robots: 'noindex,nofollow',
  other: {
    'trustpilot-one-time-domain-verification-id':
      '5c9328f8-1c30-4679-8f8a-0b7b3c2853d0',
  },
}

export default async function RootLayout({ children, params: { locale } }) {
  let messages
  try {
    messages = (await import(`../../dictionaries/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      {/* <head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css'
        />
        <link
          href='
https://cdn.jsdelivr.net/npm/react-toastify@9.1.3/dist/ReactToastify.min.css
'
          rel='stylesheet'
        />
      </head> */}

      <body className={nunito.className}>
        {/* <Script
          src='https://cdnjs.cloudflare.com/ajax/libs/axios/1.5.1/axios.min.js'
          integrity='sha512-emSwuKiMyYedRwflbZB2ghzX8Cw8fmNVgZ6yQNNXXagFzFOaQmbvQ1vmDkddHjm5AITcBIZfC7k4ShQSjgPAmQ=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        /> */}
        {/* <Script strategy='afterInteractive' id='google-analytics'>
          {` 
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], 
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); 
           })(window,document,'script','dataLayer','GTM-5J4TMBX'); 
         `}
        </Script>
        <noscript>
          <iframe
            title='googletagmanager'
            src='https://www.googletagmanager.com/ns.html?id=GTM-5J4TMBX'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript> */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutComponent>{children}</LayoutComponent>
          {/* {children} */}
          <div id='myportal' />
          <div id='calendly-model-wrapper' />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
