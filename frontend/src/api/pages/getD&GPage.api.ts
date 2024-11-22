import type { Locale } from "@/configs/i18n.config";
import { http } from "@/utils/http";

export const getDGPage = async (locale: Locale = 'en') => {

     const response = await http<GetDocumentsGuidlinesResponse>(
          `/documents-guidlines-page?populate=heading_image&locale=${locale}`, {
          method: "GET",
          cache: 'force-cache'
     })

     return response
}

export interface GetDocumentsGuidlinesResponse {
     data: GetDocumentsGuidlinesResponseData;
}

interface GetDocumentsGuidlinesResponseData {
     id: number;
     attributes: PurpleAttributes;
}

interface PurpleAttributes {
     page_title: string;
     heading_text: string;
     about_text: string;
     createdAt: Date;
     updatedAt: Date;
     locale: string;
     heading_image: HeadingImage;
}

interface HeadingImage {
     data: HeadingImageData;
}

interface HeadingImageData {
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