/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'collection.cloudinary.com',
      },
    ],
  },

  // ✅ Correct usage: plain hostnames or IPs — NO http:// and NO port
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '0.0.0.0',
    'sakthidev-itsmesimongs-projects.vercel.app',
    'sakthidev.vercel.app', // your LAN IP
  ],
};

module.exports = nextConfig;
