/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.e2u.kr',
			},
		],
	},
};

module.exports = nextConfig;
