import type { Locale } from '@/configs/i18n.config';
import { http } from '@/utils/http';

export const getOrganizationPage = async (locale: Locale = 'en') => {
	const response = await http<GetOrganizationPageResponse>(
		`/organization-page?populate=heading_section_picture&locale=${locale}`,
		{
			method: 'GET',
			cache: 'force-cache',
		},
	);

	return response;
};

export interface GetOrganizationPageResponse {
	data: GetOrganizationPageResponseData;
}

interface GetOrganizationPageResponseData {
	id: number;
	attributes: PurpleAttributes;
}

interface PurpleAttributes {
	page_title: string;
	heading_section_title: string;
	managers_section_title: string;
	createdAt: Date;
	updatedAt: Date;
	locale: string;
	managers_section_text: string;
	heading_section_picture: HeadingSectionPicture;
}

interface HeadingSectionPicture {
	data: HeadingSectionPictureData;
}

interface HeadingSectionPictureData {
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
