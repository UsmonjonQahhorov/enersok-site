export const RouterConfig = {
	Home: '/',
	AboutCompany: '/about',
	OrganizationalStructure: '/structure',
	AboutSponsors: '/sponsors',
	DocumentsAndGuidelines: '/documents',
	ProjectDetails: '/project',
	News: '/news',
	SingleNew: (slug: string) => `/news/new/${slug}`,
	Careers: '/careers',
	SingleCareer: (slug: string) => `/careers/career/${slug}`,
	GRMSubmission: '/submission',
	ContactUs: '/contacts',
} as const;
