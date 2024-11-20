import type { Locale } from "@/configs/i18n.config";
import { http } from "@/utils/http";

export const getGRMSubmissionPage = async (locale: Locale = 'en') => {

     const response = await http<GetGrmSubmissionPageResponse>(
          `/grm-submission-page?populate=background_image,form_picture&locale=${locale}`, {
          method: "GET",
          // TODO: in the future, use the cache
          // cache: 'force-cache'
     })

     return response
}


export interface GetGrmSubmissionPageResponse {
     data: GetGrmSubmissionPageResponseData;
}

interface GetGrmSubmissionPageResponseData {
     id: number;
     attributes: PurpleAttributes;
}

interface PurpleAttributes {
     page_title: string;
     about_text: string;
     heading_title: string;
     createdAt: Date;
     updatedAt: Date;
     locale: string;
     background_image: BackgroundImage;
     form_picture: BackgroundImage;
}

interface BackgroundImage {
     data: BackgroundImageData;
}

interface BackgroundImageData {
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