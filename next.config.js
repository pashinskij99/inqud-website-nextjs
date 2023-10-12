/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.js'
)
// const withPlugins = require('next-compose-plugins')
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

const nextConfig = {
  // output: 'standalone',
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/business',
  //       permanent: true,
  //     },
  //   ]
  // },
  // async headers() {
  //   return [
  //     {
  //       source: '/:all*(svg|jpg|png)',
  //       locale: false,
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=9999999999, must-revalidate',
  //         },
  //       ],
  //     },
  //   ]
  // },
  // compiler: {
  //   styledComponents: true,
  //   // removeConsole: process.env.NODE_ENV === 'production',
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
    ],
  },
  // redirects: async () =>
  //   isProd
  //     ? [
  //         {
  //           source: '/:path*',
  //           has: [
  //             { type: 'host', value: 'inqud-website-nextjs-inky.vercel.app' },
  //           ],
  //           destination:
  //             'https://www.inqud-website-nextjs-inky.vercel.app/:path*',
  //           permanent: true,
  //         },
  //       ]
  //     : [],

  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: [
  //       {
  //         loader: '@svgr/webpack',
  //         options: {
  //           svgoConfig: {
  //             plugins: [
  //               {
  //                 name: 'preset-default',
  //                 params: {
  //                   overrides: {
  //                     cleanupIds: false,
  //                     removeViewBox: false,
  //                   },
  //                 },
  //               },
  //               'removeXMLNS',
  //             ],
  //           },
  //         },
  //       },
  //     ],
  //   })

  //   // // eslint-disable-next-line no-param-reassign
  //   // config.resolve.fallback = { fs: false }

  //   // // eslint-disable-next-line global-require
  //   // if (isServer) require('./src/server-scripts/sitemap-generator')

  //   return config
  // },
}

// module.exports = withPlugins([withBundleAnalyzer, withNextIntl], nextConfig)
module.exports = withNextIntl(nextConfig)
