import 'server-only';
import type { Locale } from '@/configs/i18n.config';
import { http } from '@/utils/http';

export const getHistoryPage = async (locale: Locale = 'en') => {
  const response = await http<GetNewsPageResponse>(
    `/history-page?populate=heading_picture&locale=${locale}`,
    {
      method: 'GET',
      cache: 'force-cache',
    },
  );

  return response;
};

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
  development_section_title: string;
}