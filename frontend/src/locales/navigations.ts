import { RouterConfig } from '@/configs/router.config';

export const navigation = [
	{
		name_en: 'About Us',
		name_uz: 'Biz Haqimizda',
		href: RouterConfig.AboutCompany,
		childMenus: [
			{
				name_en: 'About Us',
				name_uz: 'Biz Haqimizda',
				href: RouterConfig.AboutCompany,
			},
			{
				name_en: 'Management',
				name_uz: 'Boshqaruv',
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
		name_uz: 'Loyiha Tafsilotlari',
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
				name_uz: 'Hujjatlar va qo`llanmalar',
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
		name_uz: 'Karyera',
		href: RouterConfig.Careers,
	},
	{
		name_en: 'Grievance Portal',
		name_uz: 'Shikoyat Portali',
		href: RouterConfig.GRMSubmission,
	},
];

export const mobileNavigation = [
	{
		name_en: 'Home',
		name_uz: 'Bosh sahifa',
		href: RouterConfig.Home,
	},
	{
		name_en: 'About Us',
		name_uz: 'Biz Haqimizda',
		href: RouterConfig.AboutCompany,
	},
	{
		name_en: 'Management',
		name_uz: 'Boshqaruv',
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
		name_uz: 'Hujjatlar va qo`llanmalar',
		href: RouterConfig.DocumentsAndGuidelines,
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
		name_en: 'Grievance Portal',
		name_uz: 'Shikoyat Portali',
		href: RouterConfig.GRMSubmission,
	},
	{
		name_en: 'Contact Us',
		name_uz: 'Aloqa',
		href: RouterConfig.ContactUs,
	},
];
