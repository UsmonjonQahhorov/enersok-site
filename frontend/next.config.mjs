import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

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
	experimental: {
		staleTimes: {
			dynamic: 30,
		},
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
	async rewrites() {
		return [
			{
				source: '/:locale/font/:path*',
				destination: '/font/:path*',
			},
		];
	},
};

export default withNextIntl(nextConfig);
