/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  compiler: {
    styledComponents: true,
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
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      cleanupIds: false,
                      removeViewBox: false,
                    },
                  },
                },
                'removeXMLNS',
              ],
            },
          },
        },
      ],
    })

    // // eslint-disable-next-line no-param-reassign
    // config.resolve.fallback = { fs: false }

    // // eslint-disable-next-line global-require
    // if (isServer) require('./src/server-scripts/sitemap-generator')

    return config
  },
}

module.exports = nextConfig
