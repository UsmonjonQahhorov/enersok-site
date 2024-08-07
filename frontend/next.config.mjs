/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	images: {
		remotePatterns: [],
	},
	headers: async () => {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Developed-By',
						value: '',
					},
				],
			},
		];
	},
};

export default nextConfig;
