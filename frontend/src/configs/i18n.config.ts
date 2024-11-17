export const localePrefix = 'as-needed';
export const defaultLocale = 'en' as const;
export const locales = ['en', 'uz'] as const;
export type Locale = (typeof locales)[number];
