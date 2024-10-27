import type { Locale } from "@/configs/i18n.config";
import type { FullNews } from "@/types/news.types";
import { http } from "@/utils/http";

export const getSingleNews = async (locale: Locale = 'en', slug: string): Promise<GetSingleNewsReturnType> => {
     const response = await http<InitialResponse>(
          `/new?filters[slug]=${slug}&populate=preview_picture&populate=localizations`,
     )

     let news: SingleNewsResponse | null = null

     if (response.data === null) {
          return {
               code: response.code,
               ok: false,
               error: response.error,
               data: null
          }
     }
     if (response.data.data.length === 0 || response.data.data.length > 1) {
          return {
               code: response.code,
               ok: false,
               error: response.error,
               data: null
          }
     }

     const data = response.data.data[0]?.attributes;

     if (!data) {
          return {
               code: response.code,
               ok: false,
               error: response.error,
               data: null
          }
     }

     if (locale === 'en') {
          news = {
               previewTitle: data.preview_title,
               previewTime: data.preview_time,
               previewDate: data.preview_date,
               newsDescription: data.news_description,
               previewPicture: {
                    url: data.preview_picture.data.attributes.url,
                    width: data.preview_picture.data.attributes.width,
                    height: data.preview_picture.data.attributes.height,
                    name: data.preview_picture.data.attributes.name,
               },
          }
     }
     if (locale === 'uz') {
          news = {
               previewTitle: data.localizations?.data.find((item) => item.attributes.locale === 'uz')?.attributes.preview_title || '',
               previewTime: data.localizations?.data.find((item) => item.attributes.locale === 'uz')?.attributes.preview_time || '',
               previewDate: data.localizations?.data.find((item) => item.attributes.locale === 'uz')?.attributes.preview_date || '',
               newsDescription: data.localizations?.data.find((item) => item.attributes.locale === 'uz')?.attributes.news_description || '',
               previewPicture: {
                    url: data.preview_picture.data.attributes.url,
                    width: data.preview_picture.data.attributes.width,
                    height: data.preview_picture.data.attributes.height,
                    name: data.preview_picture.data.attributes.name,
               },
          }
     }

     return {
          code: response.code,
          ok: true,
          error: null,
          data: news
     }
}


export interface GetSingleNewsReturnType {
     code: number;
     ok: boolean;
     error: unknown;
     data: SingleNewsResponse | null;
}

type SingleNewsResponse = Omit<FullNews, 'slug'>;


interface InitialResponse {
     data: Datum[];
     meta: Meta;
}

interface Localizations {
     data: Datum[];
}

interface DatumAttributes {
     preview_title: string;
     preview_time: string;
     preview_date: string;
     createdAt: Date;
     updatedAt: Date;
     locale: string;
     news_description: string;
     slug: string;
     preview_picture: PreviewPicture;
     localizations?: Localizations;
}

interface Datum {
     id: number;
     attributes: DatumAttributes;
}

interface PreviewPicture {
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
