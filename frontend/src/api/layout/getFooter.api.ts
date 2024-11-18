import type { Locale } from '@/configs/i18n.config';
import { http } from '@/utils/http';

export const getFooter = async (locale: Locale = 'en') => {
	const response = await http<GetFooter>(
		`/footer?populate=logo&locale=${locale}`,
		{
			method: 'GET',
			cache: 'force-cache',
			next:{
				tags: ['footer']
			}
		},
	);

	return response;
};

interface GetFooter {
	data: GetFooterData;
}

interface GetFooterData {
	id: number;
	attributes: PurpleAttributes;
}

interface PurpleAttributes {
	email: string;
	phone: string;
	address_text: string;
	address_link: string;
	work_hours_text: string;
	createdAt: Date;
	updatedAt: Date;
	locale: string;
	x_link: string;
	telegram_link: string;
	facebook_link: string;
	linkedIn_link: string;
	logo: Logo;
}

interface Logo {
	data: LogoData;
}

interface LogoData {
	id: number;
	attributes: FluffyAttributes;
}

interface FluffyAttributes {
	name: string;
	alternativeText: null;
	caption: null;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: null;
	provider: string;
	provider_metadata: null;
	createdAt: Date;
	updatedAt: Date;
}

interface Formats {
	thumbnail: Thumbnail;
}

interface Thumbnail {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: null;
	width: number;
	height: number;
	size: number;
	sizeInBytes: number;
	url: string;
}
