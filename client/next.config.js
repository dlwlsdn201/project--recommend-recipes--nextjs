const path = require('path');

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
    API_CLIENT_URL: process.env.API_CLIENT_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    BASE_TIMEOUT: process.env.BASE_TIMEOUT,
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
