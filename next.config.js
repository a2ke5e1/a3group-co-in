/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['play.google.com', 'play-lh.googleusercontent.com'],
  }, 
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

module.exports = withMDX(nextConfig)
