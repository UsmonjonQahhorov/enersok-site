import type { Locale } from "@/configs/i18n.config";
import { http } from "@/utils/http"

export const getCarousel = async (locale: Locale = 'en') => {
     const response = await http<GetCarousel>(`/carousels?populate=picture&locale=${locale}`, {
          method: 'GET',
     })

     return response
}

interface GetCarousel {
     data: Datum[];
     meta: Meta;
}

interface Datum {
     id: number;
     attributes: DatumAttributes;
}

interface DatumAttributes {
     title: string;
     text: string;
     createdAt: Date;
     updatedAt: Date;
     publishedAt: Date;
     locale: string;
     picture: Picture;
}

interface Picture {
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

