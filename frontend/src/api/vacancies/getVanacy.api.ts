import 'server-only';
import type { Locale } from '@/configs/i18n.config';
import type { Vacancy } from '@/types/vacancy.types';
import { http } from '@/utils/http';

export const getVacancy = async (
	slug: string,
	locale: Locale = 'en',
): Promise<GetVacancyReturnType> => {
	const response = await http<InitialResponse>(
		`/vacancies?filters[slug]=${slug}&populate=localizations`,
	);

	let vacancy: VacancyResponse | null = null;

	if (response.data === null) {
		return {
			code: response.code,
			ok: false,
			error: response.error,
			data: null,
		};
	}
	if (response.data.data.length === 0 || response.data.data.length > 1) {
		return {
			code: response.code,
			ok: false,
			error: response.error,
			data: null,
		};
	}

	const data = response.data.data[0]?.attributes;

	if (!data) {
		return {
			code: response.code,
			ok: false,
			error: response.error,
			data: null,
		};
	}

	if (locale === 'en') {
		vacancy = {
			vacancyName: data.vacancy_name,
			vacancyLocation: data.vacancy_location,
			vacancyDescription: data.vacancy_description,
			vacancyClosingDate: data.vacancy_closing_date,
			vacancyPublishedDate: data.publishedAt,
		};
	}
	if (locale === 'uz') {
		vacancy = {
			vacancyName:
				data.localizations.data.find((item) => item.attributes.locale === 'uz')
					?.attributes.vacancy_name || '',
			vacancyLocation:
				data.localizations.data.find((item) => item.attributes.locale === 'uz')
					?.attributes.vacancy_location || '',
			vacancyClosingDate:
				data.localizations.data.find((item) => item.attributes.locale === 'uz')
					?.attributes.vacancy_closing_date || '',
			vacancyDescription:
				data.localizations.data.find((item) => item.attributes.locale === 'uz')
					?.attributes.vacancy_description || '',
			vacancyPublishedDate: data.publishedAt,
		};
	}

	return {
		code: response.code,
		ok: response.ok,
		error: response.error,
		data: vacancy,
	};
};

interface GetVacancyReturnType {
	code: number;
	ok: boolean;
	error: unknown;
	data: null | VacancyResponse;
}

type VacancyResponse = Omit<Vacancy, 'vacancySlug'>;

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
	vacancy_closing_date: string;
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
