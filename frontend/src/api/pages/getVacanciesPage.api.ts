import 'server-only';
import type { Locale } from '@/configs/i18n.config';
import { http } from '@/utils/http';

export const getVacanciesPage = async (locale: Locale = 'en') => {
	const response = await http<GetVacanciesPageResponse>(
		`/vacancies-page?populate=heading_picture,heading_background_picture&locale=${locale}`,
		{
			method: 'GET',
			cache: 'force-cache',
		},
	);

	return response;
};

export interface GetVacanciesPageResponse {
	data: GetVacanciesPageResponseData;
}

interface GetVacanciesPageResponseData {
	id: number;
	attributes: PurpleAttributes;
}

interface PurpleAttributes {
	page_title: string;
	heading_title: string;
	heading_about_title: string;
	heading_about_text: string;
	createdAt: Date;
	updatedAt: Date;
	locale: string;
	about_vacancies_text: string;
	about_vacancies_title: string;
	heading_picture: HeadingPicture;
	heading_background_picture: HeadingPicture;
}

interface HeadingPicture {
	data: HeadingBackgroundPictureData;
}

interface HeadingBackgroundPictureData {
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
