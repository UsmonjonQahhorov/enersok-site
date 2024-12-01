import 'server-only';
import type { Locale } from '@/configs/i18n.config';
import { http } from '@/utils/http';

export const getContactPage = async (locale: Locale = 'en') => {
	const response = await http<GetContactPageResponse>(
		`/contact-page?populate=heading_section_picture&locale=${locale}`,
		{
			method: 'GET',
			cache: 'force-cache',
		},
	);

	return response;
};

export interface GetContactPageResponse {
	data: Data;
}

interface Data {
	id: number;
	attributes: Attributes;
}

interface Attributes {
	page_title: string;
	heading_title: string;
	heading_section_picture: HeadingSectionPicture;
	map_link: string;
	social_section_title: string;
	phone: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
	locale: string;
	address: string;
	x_link: string;
	telegram_link: string;
	linkedIn_link: string;
	facebook_link: string;
	work_hours: string;
}

interface HeadingSectionPicture {
	data: Data;
}

interface Data {
	id: number;
	attributes: Attributes;
}

interface Attributes {
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
}
