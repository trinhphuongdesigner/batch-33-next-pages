/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pinterest.com",
      "images.unsplash.com",
      "thuthuatphanmem.vn",
    ],
  },
}

module.exports = nextConfig