import { RouterConfig } from '@/configs/router.config';

export const navigation = [
    {
        name_en: 'About Company',
        name_uz: 'About Company',
        href: RouterConfig.AboutCompany,
        childMenus: [
            {
                name_en: 'Organizational Structure',
                name_uz: 'Organizational Structure',
                href: RouterConfig.OrganizationalStructure,
            },
            {
                name_en: 'About Sponsors',
                name_uz: 'About Sponsors',
                href: RouterConfig.AboutSponsors,
            },
            {
                name_en: 'Documents and Guidelines',
                name_uz: 'Documents and Guidelines',
                href: RouterConfig.DocumentsAndGuidelines,
            },
        ],
    },
    {
        name_en: 'Project',
        name_uz: 'Project',
        href: RouterConfig.ProjectDetails,
    },
    {
        name_en: 'Open Data',
        name_uz: 'Open Data',
        href: RouterConfig.OpenData,
    },
    {
        name_en: 'News',
        name_uz: 'News',
        href: RouterConfig.News,
    },
    {
        name_en: 'Careers',
        name_uz: 'Careers',
        href: RouterConfig.Careers,
    },
    {
        name_en: 'GRM Submission',
        name_uz: 'GRM Submission',
        href: RouterConfig.GRMSubmission,
    }
];