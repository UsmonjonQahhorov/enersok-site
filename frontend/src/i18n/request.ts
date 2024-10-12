import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './routing';
import type { Locale } from '@/configs/i18n.config';

export default getRequestConfig(async ({ locale }) => {
	if (!routing.locales.includes(locale as Locale)) notFound();

	return {};
});