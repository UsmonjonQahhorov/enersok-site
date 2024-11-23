import type { Locale } from '@/configs/i18n.config';
import { http } from '@/utils/http';

export const getHomePage = async (locale: Locale = 'en') => {
	const response = await http<GetHomePageResponse>(
		`/home-page?populate=about_section_first_image,about_section_second_image,community_section_first_picture,community_section_second_picture,community_section_third_picture,community_section_fourth_picture,heading_background_picture,location_section_first_picture,location_section_second_picture,sponsors_section_background_picture,community_section_background_picture&locale=${locale}`,
		{
			method: 'GET',
			cache: 'force-cache',
		},
	);

	return response;
};

export interface GetHomePageResponse {
	data: GetHomePageResponseData;
}

export interface GetHomePageResponseData {
	id: number;
	attributes: PurpleAttributes;
}

export interface PurpleAttributes {
	page_title: string;
	createdAt: Date;
	updatedAt: Date;
	locale: string;
	feature_section_1_title: string;
	feature_section_1_text: string;
	feature_section_2_title: string;
	feature_section_2_text: string;
	feature_section_3_title: string;
	feature_section_3_text: string;
	about_section_title: string;
	about_section_text: string;
	about_section_second_title: string;
	about_section_second_text: string;
	about_section_info: string;
	sponsors_section_title: string;
	sponsors_section_text: string;
	sponsors_section_sponsors_title: string;
	localtion_section_title: string;
	location_section_text: string;
	news_section_title: string;
	community_section_title: string;
	community_section_x_link: string;
	community_section_telegram_link: string;
	community_section_linkedIn_link: string;
	community_section_facebook_link: string;
	community_section_social_title: string;
	location_section_first_location: string;
	location_section_second_location: string;
	location_section_first_company_name: string;
	location_section_second_company_name: string;
	about_section_first_image: AboutSectionFirstImage;
	about_section_second_image: AboutSectionFirstImage;
	community_section_first_picture: AboutSectionFirstImage;
	community_section_second_picture: AboutSectionFirstImage;
	community_section_third_picture: AboutSectionFirstImage;
	community_section_fourth_picture: AboutSectionFirstImage;
	heading_background_picture: AboutSectionFirstImage;
	location_section_first_picture: AboutSectionFirstImage;
	location_section_second_picture: AboutSectionFirstImage;
	sponsors_section_background_picture: AboutSectionFirstImage;
	community_section_background_picture: AboutSectionFirstImage;
}

interface AboutSectionFirstImage {
	data: AboutSectionFirstImageData;
}

interface AboutSectionFirstImageData {
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
	mime: MIME;
	size: number;
	url: string;
	previewUrl: null;
	provider: Provider;
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
	mime: MIME;
	path: null;
	width: number;
	height: number;
	size: number;
	sizeInBytes: number;
	url: string;
}

enum MIME {
	ImageJPEG = 'image/jpeg',
	ImagePNG = 'image/png',
	ImageWebp = 'image/webp',
}

enum Provider {
	Local = 'local',
}
