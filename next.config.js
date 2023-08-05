/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() { 
    return [
      {
        source: '/', 
        destination: '/progress',
        permanent: true,
      }
    ]
  }, 
  images: {
    domains: ['play.google.com'],
  }
}

module.exports = nextConfig
