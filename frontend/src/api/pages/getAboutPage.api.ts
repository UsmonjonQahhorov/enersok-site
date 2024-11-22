import type { Locale } from "@/configs/i18n.config";
import { http } from "@/utils/http";

export const getAboutPage = async (locale: Locale = 'en') => {

     const response = await http<GetAboutPageResponse>(
          `/about-page?populate=heading_section_picture,heading_section_background_picture,info_section_picture,info_section_first_picture,info_section_second_picture&locale=${locale}`, {
          method: 'GET',
          cache: 'force-cache',
     });

     return response
}

export interface GetAboutPageResponse {
     data: GetAboutPageResponseData;
}

interface GetAboutPageResponseData {
     id: number;
     attributes: PurpleAttributes;
}

interface PurpleAttributes {
     page_title: string;
     heading_section_title: string;
     heading_section_text: string;
     info_section_title: string;
     info_section_text: string;
     createdAt: Date;
     updatedAt: Date;
     locale: string;
     info_section_first_title: string;
     info_section_second_title: string;
     info_section_first_text: string;
     info_section_second_text: string;
     development_section_title: string;
     heading_section_picture: Picture;
     heading_section_background_picture: Picture;
     info_section_picture: Picture;
     info_section_first_picture: Picture;
     info_section_second_picture: Picture;
}

interface Picture {
     data: HeadingSectionBackgroundPictureData;
}

interface HeadingSectionBackgroundPictureData {
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