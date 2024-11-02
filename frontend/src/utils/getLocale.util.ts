import type { Locale } from '@/configs/i18n.config';
import { useLocale } from 'next-intl';

/**
 * @note This hook is used to get the current locale.
 * @returns The current locale.
 */
export const getLocale = () => {
	const locale: Locale = useLocale() as Locale;
	return locale;
};
