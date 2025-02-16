import 'server-only';
import type { Locale } from '@/configs/i18n.config';
import { http } from '@/utils/http';

export const getHistoryPage = async (locale: Locale = 'en') => {
  const response = await http<GetHistoryPageResponse>(
    `/history-page?populate=heading_image&locale=${locale}`,
    {
      method: 'GET',
      cache: 'force-cache',
    },
  );

  return response;
};

interface GetHistoryPageResponse {
  data: GetHistoryPageResponseData;
}

interface GetHistoryPageResponseData {
  id: number;
  attributes: PurpleAttributes;
}

interface PurpleAttributes {
  page_title: string;
  createdAt: Date;
  updatedAt: Date;
  locale: string;
  development_section_title: string;
  heading_title: string;
  heading_image: HeadingPicture;
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