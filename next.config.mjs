/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},

			{
				protocol: 'https',
				hostname: 'ui-avatars.com',
			},
		],
	},
};

export default nextConfig;
