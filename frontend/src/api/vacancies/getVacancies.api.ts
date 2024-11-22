import type { Locale } from '@/configs/i18n.config';
import { PaginationConfig } from '@/configs/pagination.config';
import { http } from '@/utils/http';

export const getVacancies = async (
	locale: Locale = 'en',
	page = 1,
	limit = PaginationConfig.perPage,
) => {
	const response = await http<InitialResponse>(
		`/vacancies?sort=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${limit}&populate=localizations&locale=${locale}`,
		{
			method: 'GET',
			cache: 'force-cache',
			next:{
				tags: ['vacancies'],
			}
		},
	);
	return response;
};

interface InitialResponse {
	data: Datum[];
	meta: Meta;
}

interface Localizations {
	data: Datum[];
}

interface Attributes {
	vacancy_name: string;
	vacancy_location: string;
	vacancy_closing_date: Date;
	vacancy_description: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	locale: string;
	slug: string;
	localizations: Localizations;
}

interface Datum {
	id: number;
	attributes: Attributes;
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
