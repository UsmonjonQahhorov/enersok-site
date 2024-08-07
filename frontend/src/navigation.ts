import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { localePrefix, locales } from './configs/i18n.config';

export const { Link, redirect, usePathname, useRouter, permanentRedirect } =
	createSharedPathnamesNavigation({ locales, localePrefix });
