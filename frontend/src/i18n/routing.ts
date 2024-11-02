import { defaultLocale, localePrefix, locales } from '@/configs/i18n.config';
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	locales,
	defaultLocale,
	localePrefix,
});

export const { Link, redirect, usePathname, useRouter, permanentRedirect } =
	createNavigation(routing);
