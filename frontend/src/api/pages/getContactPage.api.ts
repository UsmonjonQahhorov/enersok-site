import type { Locale } from "@/configs/i18n.config";
import { http } from "@/utils/http";

export const getContactPage = async (locale: Locale = 'en') => {

     const response = await http<GetContactPageResponse>(
          `/contact-page?populate=heading_section_picture&locale=${locale}`, {
          method: "GET",
          cache: 'force-cache'
     })

     return response
}


export interface GetContactPageResponse {
     data: Data;
}

interface Data {
     id: number;
     attributes: Attributes;
}

interface Attributes {
     page_title: string;
     heading_title: string;
     map_link: string;
     social_section_title: string;
     phone: string;
     email: string;
     createdAt: Date;
     updatedAt: Date;
     locale: string;
     address: string;
     x_link: string;
     telegram_link: string;
     linkedIn_link: string;
     facebook_link: string;
     work_hours: string;
}