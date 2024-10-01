import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing, {
	localeDetection: false,
});

export const config = {
	matcher: [
		'/',
		'/(ru|en|uz)/:path*',
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};