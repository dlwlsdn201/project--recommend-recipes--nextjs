const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.resolve(__dirname, './pages')]
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.m?js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		});
		return config;
	}
};

module.exports = nextConfig;
