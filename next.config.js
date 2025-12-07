/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Next.js image optimization in dev to avoid remote fetch DNS failures.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
