import type { Locale } from '@/configs/i18n.config';
import { PaginationConfig } from '@/configs/pagination.config';
import { http } from '@/utils/http';

export const getNews = async (
	locale: Locale = 'en',
	page = 1,
	limit = PaginationConfig.perPage,
) => {
	const response = await http<GetNews>(
		`/new?sort=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${limit}&locale=${locale}&populate=preview_picture&populate=localizations`,
		{
			method: 'GET',
		},
	);
	return response;
};

export interface GetNews {
	data: Datum[];
	meta: Meta;
}

interface Localizations {
	data: Datum[];
}

interface DatumAttributes {
	preview_title: string;
	preview_time: string;
	preview_date: Date;
	createdAt: Date;
	updatedAt: Date;
	locale: string;
	news_description: string;
	news_description_full: string | null;
	slug: string;
	preview_picture: PreviewPicture;
	localizations?: Localizations;
}

interface Datum {
	id: number;
	attributes: DatumAttributes;
}

interface PreviewPicture {
	data: Data;
}

interface Data {
	id: number;
	attributes: DataAttributes;
}

interface DataAttributes {
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

interface Meta {
	pagination: Pagination;
}

interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}
