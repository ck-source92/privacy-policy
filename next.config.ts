import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/privacy-policy/' : '',
  basePath: isProd ? '/privacy-policy' : '',
  output: 'export'
};

export default nextConfig;
