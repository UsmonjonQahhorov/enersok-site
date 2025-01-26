import 'server-only';
import type { Locale } from '@/configs/i18n.config';
import { http } from '@/utils/http';

export const getDocuments = async (locale: Locale = 'en') => {
	const response = await http<GetDocumentsResponse>(
		`/documents-and-guidlines?populate=document&locale=${locale}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			cache: 'force-cache',
			next: {
				tags: ['documents'],
			},
		},
	);

	return response;
};

export interface GetDocumentsResponse {
	data: Datum[];
	meta: Meta;
}

interface Datum {
	id: number;
	attributes: DatumAttributes;
}

interface DatumAttributes {
	createdAt: Date;
	updatedAt: Date;
	locale: string;
	document_name: string;
	document_googledrive_link?: string;
	document: Document;
}

interface Document {
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
	width: null;
	height: null;
	formats: null;
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

interface Meta {
	pagination: Pagination;
}

interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}
