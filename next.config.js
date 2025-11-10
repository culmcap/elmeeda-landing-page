/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    qualities: [75, 90],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
