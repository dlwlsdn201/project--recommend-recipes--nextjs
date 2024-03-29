const path = require('path');
const cors = require('cors');

const allowedOrigins = ['https://project-recommend-recipes-nextjs-client.vercel.app'];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, './pages')],
  },
  env: {
    API_SSR_URL: process.env.API_SSR_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    BASE_TIMEOUT: process.env.BASE_TIMEOUT,
  },

  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // 모든 도메인 허용하지 않고, 필요에 따라 allowedOrigins로 변경
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contract',
        destination: '/',
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
