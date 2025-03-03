/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comment out this line:
  // output: "export", 
  images: {
    unoptimized: true,
    domains: ["heybuddystorage.blob.core.windows.net"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;