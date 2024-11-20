import type { Locale } from "@/configs/i18n.config";
import { http } from "@/utils/http";

export const getDevelopments = async (locale: Locale = 'en') => {

     const response = await http<GetDevelopmentsResponse>(
          `/developments?populate=features,development_picture&locale=${locale}`, {
          method: 'GET',
          cache: 'force-cache',
          next: {
               tags: ['developments'],
          },
     })

     return response
}

export interface GetDevelopmentsResponse {
     data: GetDevelopmentsResponseDatum[];
     meta: Meta;
}

interface GetDevelopmentsResponseDatum {
     id: number;
     attributes: PurpleAttributes;
}

interface PurpleAttributes {
     development_year: string;
     createdAt: Date;
     updatedAt: Date;
     locale: string;
     features: Features;
     development_picture: DevelopmentPicture;
}

interface DevelopmentPicture {
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

interface Features {
     data: FeaturesDatum[];
}

interface FeaturesDatum {
     id: number;
     attributes: FluffyAttributes;
}

interface FluffyAttributes {
     info_text: string;
     createdAt: Date;
     updatedAt: Date;
     locale: string;
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
