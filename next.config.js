/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/X8pEdnEmuY',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/nord-studio',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/wearenordstudio',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/wearenordstudio',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
