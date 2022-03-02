/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["digimon.shadowsmith.com"],
  },
};

module.exports = nextConfig;
