import { defaultLocale, localePrefix, locales } from '@/configs/i18n.config';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: locales,
	defaultLocale: defaultLocale,
	localeDetection: false,
	localePrefix: localePrefix,
});

export const config = {
	matcher: [
		'/',
		'/(ru|en|uz)/:path*',
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};
