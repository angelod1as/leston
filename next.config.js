/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, options) => {
    config.plugins.push(new options.webpack.IgnorePlugin(/\/__tests__\//))
    return config
  },
  reactStrictMode: true,
}
