import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import type { Locale } from '@/configs/i18n.config';

export default getRequestConfig(async ({ requestLocale }) => {

	let locale = await requestLocale;

	if (!locale || !routing.locales.includes(locale as Locale)) {
		locale = routing.defaultLocale;
	}

	return { locale };
});