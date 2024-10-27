import { RouterConfig } from '@/configs/router.config';

export const navigation = [
    {
        name_en: 'About Company',
        name_uz: 'Kompaniya haqida',
        href: RouterConfig.AboutCompany,
        childMenus: [
            {
                name_en: 'About Company',
                name_uz: 'Kompaniya haqida',
                href: RouterConfig.AboutCompany,
            },
            {
                name_en: 'Organizational Structure',
                name_uz: 'Tashkiliy tuzilma',
                href: RouterConfig.OrganizationalStructure,
            },
            {
                name_en: 'About Sponsors',
                name_uz: 'Sponsorlar haqida',
                href: RouterConfig.AboutSponsors,
            },
            {
                name_en: 'Documents and Guidelines',
                name_uz: 'Hujjatlar va qo`llanmalar',
                href: RouterConfig.DocumentsAndGuidelines,
            },
        ],
    },
    {
        name_en: 'Project',
        name_uz: 'Loyihalar',
        href: RouterConfig.ProjectDetails,
    },
    {
        name_en: 'Open Data',
        name_uz: 'Ochiq ma`lumotlar',
        href: RouterConfig.OpenData,
    },
    {
        name_en: 'News',
        name_uz: 'Yangiliklar',
        href: RouterConfig.News,
    },
    {
        name_en: 'Careers',
        name_uz: 'Karyera',
        href: RouterConfig.Careers,
    },
    {
        name_en: 'GRM Submission',
        name_uz: 'GRM topshirish',
        href: RouterConfig.GRMSubmission,
    }
];