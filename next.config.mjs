/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // ⭐ Add all redirects here
  async redirects() {
    return [
      {
        source: "/blogs/1",
        destination: "/blogs/amazon-a-plus-content-guide",
        permanent: true,
      },
      {
        source: "/blogs/2",
        destination: "/blogs/sales-performance-analytics",
        permanent: true,
      },
      {
        source: "/blogs/3",
        destination: "/blogs/easy-category-approval-guide",
        permanent: true,
      },
      {
        source: "/blogs/4",
        destination: "/blogs/mobile-ecommerce-conversion-strategies",
        permanent: true,
      },
      {
        source: "/blogs/5",
        destination: "/blogs/seller-account-setup-amazon-filpkart",
        permanent: true,
      },
      {
        source: "/blogs/6",
        destination: "/blogs/5-minute-product-listing-audit",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
