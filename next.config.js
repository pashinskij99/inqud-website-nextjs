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
  webpack(config) {
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

    return config
  },
}

module.exports = nextConfig
