import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
import type { NextConfig } from 'next';
import withPlaiceholder from "@plaiceholder/next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
			},
			{
				protocol: 'https',
				hostname: 'enersok.uz',
			},
			{
				protocol: 'https',
				hostname: 'api.enersok.uz',
			}
		],
	},
	headers: async () => {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Developed-By',
						value: 'Team64',
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

export default withNextIntl(withPlaiceholder(nextConfig));
