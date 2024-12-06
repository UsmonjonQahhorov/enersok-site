import type { Locale } from '@/configs/i18n.config';
import { http } from '@/utils/http';

export const search = async (
	query = '',
	locale: Locale = 'en',
	signal?: AbortSignal,
) => {
	const response = await http<GetSearchResponse>(
		`/fuzzy-search/search?query=${query}&locale=${locale}`,
		{
			method: 'GET',
			// Always use this header for search, because it is a public endpoint
			// f***ing strapi can't handle it
			withAuth: false,
			signal,
		},
	);

	return response;
};

interface GetSearchResponse {
	new: New[];
	vacancies: Vacancy[];
	'documents-and-guidlines': DocumentsAndGuidline[];
}

interface DocumentsAndGuidline {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	locale: string;
	document_name: string;
}

interface New {
	id: number;
	preview_title: string;
	preview_time: string;
	preview_date: Date;
	createdAt: Date;
	updatedAt: Date;
	locale: string;
	news_description: string;
	slug: string;
	news_description_full: null | string;
}

interface Vacancy {
	id: number;
	vacancy_name: string;
	vacancy_location: string;
	vacancy_closing_date: Date;
	vacancy_description: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	locale: string;
	slug: string;
}
