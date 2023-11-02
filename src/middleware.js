import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'ru'],
  // locales: ['en'],

  defaultLocale: 'en',
  localePrefix: 'always',
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
