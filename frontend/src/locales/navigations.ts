import { RouterConfig } from '@/configs/router.config';

export const navigation = [
	{
		name_en: 'About Us',
		name_uz: 'Korxona Haqida',
		href: RouterConfig.AboutCompany,
		childMenus: [
			{
				name_en: 'Who we are',
				name_uz: 'Biz Haqimizda',
				href: RouterConfig.AboutCompany,
			},
			{
				name_en: 'Management',
				name_uz: 'Rahbariyat',
				href: RouterConfig.OrganizationalStructure,
			},
			{
				name_en: 'Sponsors',
				name_uz: 'Sponsorlar',
				href: RouterConfig.AboutSponsors,
			}
		],
	},
	{
		name_en: 'Project Details',
		name_uz: 'Loyiha Ma’lumoti',
		href: RouterConfig.ProjectDetails,
		childMenus: [
			{
				name_en: 'About Project',
				name_uz: 'Loyiha Haqida',
				href: RouterConfig.ProjectDetails,
			},
			{
				name_en: 'Project History',
				name_uz: 'Loyiha Tarixi',
				href: RouterConfig.History,
			},
			{
				name_en: 'Documents and Guidelines',
				name_uz: 'Hujjatlar',
				href: RouterConfig.DocumentsAndGuidelines,
			},
		]
	},
	{
		name_en: 'News',
		name_uz: 'Yangiliklar',
		href: RouterConfig.News,
	},
	{
		name_en: 'Careers',
		name_uz: 'Ish O’rinlari',
		href: RouterConfig.Careers,
	},
	{
		name_en: 'Grievance Portal',
		name_uz: 'Shikoyatlar Portali',
		href: RouterConfig.GRMSubmission,
	},
];

export const mobileNavigation = [
	{
		name_en: 'Home',
		name_uz: 'Bosh Sahifa',
		href: RouterConfig.Home,
	},
	{
		name_en: 'Who we are',
		name_uz: 'Biz Haqimizda',
		href: RouterConfig.AboutCompany,
	},
	{
		name_en: 'Management',
		name_uz: 'Rahbariyat',
		href: RouterConfig.OrganizationalStructure,
	},
	{
		name_en: 'Sponsors',
		name_uz: 'Sponsorlar',
		href: RouterConfig.AboutSponsors,
	},
	{
		name_en: 'About Project',
		name_uz: 'Loyiha Haqida',
		href: RouterConfig.ProjectDetails,
	},
	{
		name_en: 'Project History',
		name_uz: 'Loyiha Tarixi',
		href: RouterConfig.History,
	},
	{
		name_en: 'Documents and Guidelines',
		name_uz: 'Hujjatlar',
		href: RouterConfig.DocumentsAndGuidelines,
	},
	{
		name_en: 'News',
		name_uz: 'Yangiliklar',
		href: RouterConfig.News,
	},
	{
		name_en: 'Careers',
		name_uz: 'Ish O’rinlari',
		href: RouterConfig.Careers,
	},
	{
		name_en: 'Grievance Portal',
		name_uz: 'Shikoyatlar Portali',
		href: RouterConfig.GRMSubmission,
	},
	{
		name_en: 'Contact Us',
		name_uz: 'Aloqa',
		href: RouterConfig.ContactUs,
	},
];
