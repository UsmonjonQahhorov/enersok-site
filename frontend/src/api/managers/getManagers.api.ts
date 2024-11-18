import type { Locale } from "@/configs/i18n.config";
import { http } from "@/utils/http";

export const getManagers = async (locale: Locale = 'en') => {

     const response = await http<GetManagersResponse>(
          `/managers?populate=manager_picture&locale=${locale}`, {
          method: 'GET',
          cache: 'force-cache',
          next: {
               tags: ['managers'],
          },
     })

     return response
}


export interface GetManagersResponse {
     data: Datum[];
     meta: Meta;
}

interface Datum {
     id: number;
     attributes: DatumAttributes;
}

interface DatumAttributes {
     manger_name: string;
     manager_position: string;
     manager_email: string;
     createdAt: Date;
     updatedAt: Date;
     locale: string;
     manager_picture: ManagerPicture;
}

interface ManagerPicture {
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
