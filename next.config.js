/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com', 'example2.com'],
  },
  experimental: {
    serverActions: true
  }
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
