import { getVacanciesPage } from '@/api/pages/getVacanciesPage.api';
import { getVacancies } from '@/api/vacancies/getVacancies.api';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CareerCard } from '@/components/ui/CareerCard';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { RouterConfig } from '@/configs/router.config';
import type { DynamicMetadata, PageType } from '@/types/component.types';
import { getBackendImage } from '@/utils/getBackendImage';
import Image from 'next/image';
import { PagePagination } from './_components/PagePagination';
import { getOriginSlug } from '@/utils/getOriginSlug.util';
import type { Metadata } from 'next';
// import Factory from '@public/facroty.png';
// import Banner from '@public/vacancy-banner.png';

export const generateMetadata: DynamicMetadata = async ({ params }): Promise<Metadata> => {

	const { locale } = await params;
	const aboutPageData = await getVacanciesPage(locale);

	return {
		title: aboutPageData.data?.data.attributes.page_title,
		description: aboutPageData.data?.data.attributes.heading_about_text,
	}
}

const CareersPage: PageType = async ({ params, searchParams }) => {
	const { locale } = await params;
	const query = await searchParams;
	const page = Number.parseInt(query?.page as string) || 1;

	const breadcrumHomeLocale = locale === 'en' ? 'Main' : 'Asosiy';
	const breadcrumPageLocale = locale === 'en' ? 'Careers' : 'Karyera';

	const careersPageData = await getVacanciesPage(locale);
	const vacancies = await getVacancies(locale, page);

	return (
		<>
			{/* Hero Section */}
			<section className="bg-backgroundImage1 relative overflow-hidden">
				<Container className="pt-[104px] sm:pt-[164px] pb-11 flex lg:grid lg:grid-cols-2">
					<div>
						<Breadcrumbs
							textHome={breadcrumHomeLocale}
							textPage={breadcrumPageLocale}
							urlHome={RouterConfig.Home}
							urlPage={RouterConfig.Careers}
						/>
						<Image
							src={getBackendImage(careersPageData.data?.data.attributes.heading_picture.data.attributes.url)}
							width={careersPageData.data?.data.attributes.heading_picture.data.attributes.width}
							height={careersPageData.data?.data.attributes.heading_picture.data.attributes.height}
							quality={100}
							alt={careersPageData.data?.data.attributes.heading_picture.data.attributes.name || 'Careers Banner Enersok'}
							className="object-cover object-center mt-8 max-h-[250px] md:max-h-[350px] block lg:hidden rounded-xl h-full"
							priority={true}
						/>
						<Heading className="!leading-[normal] text-secondary uppercase py-8 lg:py-[75px] text-5xl lg:text-[100px]">
							{careersPageData.data?.data.attributes.heading_title}
						</Heading>
						<div className="pt-10 border-t-[1px] border-solid border-secondaryOpacity3 pb-4 lg:pb-40">
							<Heading className="text-base md:text-3xl font-semibold text-secondary mb-3">
								{careersPageData.data?.data.attributes.heading_about_title}
							</Heading>
							<Paragraph className="text-sm md:text-xl font-normal text-secondary">
								{careersPageData.data?.data.attributes.heading_about_text}
							</Paragraph>
						</div>
					</div>
					<div className="relative z-10 pl-14 hidden lg:block h-full min-h-[664px] max-h-[664px]">
						<Image
							src={getBackendImage(careersPageData.data?.data.attributes.heading_picture.data.attributes.url)}
							width={careersPageData.data?.data.attributes.heading_picture.data.attributes.width}
							height={careersPageData.data?.data.attributes.heading_picture.data.attributes.height}
							alt={careersPageData.data?.data.attributes.heading_picture.data.attributes.name || 'Careers Banner Enersok'}
							className="object-cover object-center min-h-[664px] max-h-[664px] rounded-xl h-full"
							quality={100}
							priority={true}
						/>
					</div>
				</Container>
				<Image
					src={getBackendImage(careersPageData.data?.data.attributes.heading_background_picture.data.attributes.url)}
					width={careersPageData.data?.data.attributes.heading_background_picture.data.attributes.width}
					height={careersPageData.data?.data.attributes.heading_background_picture.data.attributes.height}
					alt={careersPageData.data?.data.attributes.heading_background_picture.data.attributes.name || 'Careers Banner Enersok'}
					className="absolute hidden lg:block bottom-0 right-[-100px] z-[1]"
					priority={true}
				/>
			</section>
			{/* Careers Section */}
			<section className='pb-8'>
				<Container>
					<Paragraph
						className="text-sm md:text-2xl w-full border-b-[1px] lg:border-0 border-secondaryOpacity3 pb-7 whitespace-[10px] py-[50px] text-secondary"
					>
						{careersPageData.data?.data.attributes.about_vacancies_text}
					</Paragraph>
					<Heading
						as="h3"
						className="text-secondary uppercase font-normal text-[32px] md:text-[64px] pt-20 pb-8"
					>
						{careersPageData.data?.data.attributes.about_vacancies_title}
					</Heading>
					<div className="grid sm:grid-cols-2 sm:gap-x-4 lg:gap-x-0 lg:grid-cols-1">
						{
							vacancies.data?.data.map((vacancy) => (
								<CareerCard
									key={vacancy.id}
									title={vacancy.attributes.vacancy_name}
									location={vacancy.attributes.vacancy_location}
									startDate={vacancy.attributes.createdAt}
									endDate={vacancy.attributes.vacancy_closing_date}
									url={`${RouterConfig.SingleCareer(locale === 'en' ? vacancy.attributes.slug : getOriginSlug(vacancy.attributes.localizations))}`}
								/>
							))
						}
					</div>
					<PagePagination
						page={page}
						total={vacancies.data?.meta.pagination.pageCount ?? 0}
					/>
				</Container>
			</section>
		</>
	);
};

export default CareersPage;
