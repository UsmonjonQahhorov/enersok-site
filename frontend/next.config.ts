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
		// TODO: Add production backend URL
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
			},
			{
				protocol: 'http',
				hostname: 'site.enersok.uz',
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
