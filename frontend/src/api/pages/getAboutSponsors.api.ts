import type { Locale } from "@/configs/i18n.config";
import { http } from "@/utils/http"

export const getAboutSponsors = async (locale: Locale = 'en') => {
     const response = await http<GetAboutSponsorsPageResponse>(
          `/about-sponsor?populate=heading_picture&locale=${locale}`, {
          method: "GET",
          // TODO: in the future, we will use cache
          // cache: 'force-cache'
     })

     return response
}



export interface GetAboutSponsorsPageResponse {
     data: GetAboutSponsorsPageResponseData;
}

interface GetAboutSponsorsPageResponseData {
     id: number;
     attributes: PurpleAttributes;
}

interface PurpleAttributes {
     page_title: string;
     heading_title: string;
     about_section_title: string;
     about_section_text: string;
     sponsors_section_title: string;
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
