/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.aselsa.es", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
