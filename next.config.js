const path = require('path');
const cors = require('cors');

// const allowedOrigins = ['https://project-recommend-recipes-nextjs-client.vercel.app'];
const allowedOrigins = ['http://localhost:3000'];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // react-markdown v10은 ESM-only. esmExternals: 'loose'를 사용하여 외부 모듈을 로드.
    esmExternals: 'loose',
  },
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
    NEXT_PUBLIC_API_SSR_URL: process.env.NEXT_PUBLIC_API_SSR_URL,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_BASE_TIMEOUT: process.env.NEXT_PUBLIC_BASE_TIMEOUT,
  },

  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: allowedOrigins.join(','),
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
