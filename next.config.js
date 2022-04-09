/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'picsum.photos'],
  },
};

module.exports = nextConfig;
