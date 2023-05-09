/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.literacypowerid.com'],
  },
};

module.exports = nextConfig;

