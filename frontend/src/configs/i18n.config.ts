import type { LocalePrefix } from 'next-intl/routing';
export const localePrefix: LocalePrefix = 'always';
export const defaultLocale = 'ru' as const;
export const locales = ['ru', 'uz', 'en'] as const;