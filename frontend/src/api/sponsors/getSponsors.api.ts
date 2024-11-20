import type { Locale } from "@/configs/i18n.config";
import { http } from "@/utils/http"

export const getSponsors = async (locale: Locale = 'en') => {

     const response = await http<GetSponsorsResponse>(
          `/sponsors?populate=sponsor_logo&locale=${locale}`, {
          method: 'GET',
          cache: 'force-cache',
          next: {
               tags: ['sponsors'],
          },
     })

     return response
}


export interface GetSponsorsResponse {
     data: Datum[];
     meta: Meta;
}

interface Datum {
     id: number;
     attributes: DatumAttributes;
}

interface DatumAttributes {
     sponsor_name: string;
     sponsor_value: number;
     createdAt: Date;
     updatedAt: Date;
     locale: string;
     sponsor_color: string;
     sponsor_website_link: string;
     about_sponsor: string;
     sponsor_logo: SponsorLogo;
}

interface SponsorLogo {
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

interface Meta {
     pagination: Pagination;
}

interface Pagination {
     page: number;
     pageSize: number;
     pageCount: number;
     total: number;
}
