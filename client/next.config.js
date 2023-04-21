const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.resolve(__dirname, './pages')]
	}
};

module.exports = nextConfig;
