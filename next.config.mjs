/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure we match the GitHub Pages path if deploying there
  basePath: process.env.NODE_ENV === 'production' ? '/school-foundry' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/school-foundry/' : '',
};

export default nextConfig;
