/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for static export
  images: { unoptimized: true }, // required because GitHub Pages doesn't support Image Optimization
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: '/wings2sky-website', // 👈 important for GitHub Pages
  assetPrefix: '/wings2sky-website/', // 👈 ensures all static assets load correctly
};

export default nextConfig;
