import type { Locale } from "@/configs/i18n.config";
import { http } from "@/utils/http";

export const getProjectDetailPage = async (locale: Locale = 'en') => {

     const response = await http<GetProjectDetailPageResponse>(
          `/project-detail?populate=heading_background_picture,heading_section_picture,follow_section_picture&locale=${locale}`, {
          method: 'GET',
     });

     return response
}



export interface GetProjectDetailPageResponse {
     data: GetProjectDetailPageResponseData;
}

interface GetProjectDetailPageResponseData {
     id: number;
     attributes: PurpleAttributes;
}

interface PurpleAttributes {
     page_title: string;
     heading_section_title: string;
     about_section_title: string;
     about_section_text: string;
     info_section_title: string;
     createdAt: Date;
     updatedAt: Date;
     locale: string;
     info_section_first_text: string;
     info_section_second_text: string;
     info_section_third_text: string;
     info_section_fourth_text: string;
     info_section_five_text: string;
     info_section_six_text: string;
     info_section_seven_text: string;
     info_section_eight_text: string;
     info_section_background_picture: Picture;
     follow_section_title: string;
     follow_section_first_text: string;
     follow_section_second_text: string;
     heading_first_phase: string;
     heading_second_phase: string;
     heading_location_address: string;
     heading_background_picture: Picture;
     heading_section_picture: Picture;
     follow_section_picture: Picture;
}

interface Picture {
     data: FollowSectionPictureData;
}

interface FollowSectionPictureData {
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