import 'server-only';
import { http } from '@/utils/http';

export const getHeader = async () => {
	const response = await http<GetHeader>('/header?populate=logo', {
		method: 'GET',
		cache: 'force-cache',
		next: {
			tags: ['header'],
		},
	});

	return response;
};

export interface GetHeader {
	data: GetHeaderData;
}

interface GetHeaderData {
	id: number;
	attributes: PurpleAttributes;
}

interface PurpleAttributes {
	createdAt: Date;
	updatedAt: Date;
	locale: string;
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
