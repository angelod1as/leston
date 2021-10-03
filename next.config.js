/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'en-US',
  },
  webpack: (config, options) => {
    config.plugins.push(new options.webpack.IgnorePlugin(/\/__tests__\//))
    return config
  },
  reactStrictMode: true,
}
