/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost','images.unsplash.com', 'docs.material-tailwind.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
        port: '',
        pathname: '/images/stock/**',
      },
    ],
  },
};

export default nextConfig;
