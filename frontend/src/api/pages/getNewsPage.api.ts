import type { Locale } from "@/configs/i18n.config";
import { http } from "@/utils/http";

export const getNewsPage = async (locale: Locale = 'en') => {

     const response = await http<GetNewsPageResponse>(
          `/news-page?populate=heading_picture&locale=${locale}`, {
          method: 'GET',
     })

     return response
}

export interface GetNewsPageResponse {
     data: GetNewsPageResponseData;
}

interface GetNewsPageResponseData {
     id: number;
     attributes: PurpleAttributes;
}

interface PurpleAttributes {
     page_title: string;
     createdAt: Date;
     updatedAt: Date;
     locale: string;
     heading_picture: HeadingPicture;
}

interface HeadingPicture {
     data: HeadingPictureData;
}

interface HeadingPictureData {
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
