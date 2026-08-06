import type { NextConfig } from "next";

const API_URL = process.env.API_URL || '';
const API_PORT = process.env.API_PORT || '';

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://${API_URL}${API_PORT ? `:${API_PORT}` : ''}/api/:path*`,
      },
    ];
  },
  images: {
    dangerouslyAllowLocalIP: true, // Пока нету домена
    remotePatterns: [
      { // Faker генерирует ссылку на картинку с этого ресурса
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      { // Картинки хранятся на бекенде
        protocol: 'http',
        hostname: API_URL,
        port: API_PORT,
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
