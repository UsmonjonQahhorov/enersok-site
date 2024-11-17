import { getManagers } from '@/api/managers/getManagers.api';
import { getOrganizationPage } from '@/api/pages/getOrganizationPage.api';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { EmployeeCard } from '@/components/ui/EmployeeCard';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { RouterConfig } from '@/configs/router.config';
import { Link } from '@/i18n/routing';
import type { DynamicMetadata, PageType } from '@/types/component.types';
import { getBackendImage } from '@/utils/getBackendImage';
import type { Metadata } from 'next';
import Image from 'next/image';
// import Factory from '@public/facroty.png';
// import Employee from '@public/employee.png';

export const generateMetadata: DynamicMetadata = async ({ params }): Promise<Metadata> => {

	const { locale } = await params;
	const aboutPageData = await getOrganizationPage(locale);

	return {
		title: aboutPageData.data?.data.attributes.page_title,
		description: aboutPageData.data?.data.attributes.managers_section_text,
	}
}

const OrganizationalStructurePage: PageType = async ({ params }) => {
	const { locale } = await params;

	const breadcrumHomeLocale = locale === 'en' ? 'Main' : 'Asosiy';
	const breadcrumPageLocale = locale === 'en' ? 'Organizational structure' : 'Tashkiliy tuzilma';

	const aboutPageData = await getOrganizationPage(locale);
	const managers = await getManagers(locale);


	return (
		<>
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[104px] sm:pt-[164px] lg:pb-5 relative z-10">
					<Breadcrumbs
						textHome={breadcrumHomeLocale}
						textPage={breadcrumPageLocale}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.OrganizationalStructure}
					/>
					<Heading className="!leading-[normal] text-secondary uppercase py-8 lg:py-[75px] text-[32px] lg:text-[100px]">
						{aboutPageData.data?.data.attributes.heading_section_title}
					</Heading>
				</Container>
				<Image
					src={getBackendImage(aboutPageData.data?.data.attributes.heading_section_picture.data.attributes.url)}
					width={aboutPageData.data?.data.attributes.heading_section_picture.data.attributes.width}
					height={aboutPageData.data?.data.attributes.heading_section_picture.data.attributes.height}
					alt="Banner Enersok"
					className="absolute hidden lg:block bottom-0 right-[122px]"
					priority={true}
				/>
			</section>
			<section>
				<Container>
					<Paragraph
						className="text-sm md:text-2xl w-full border-b-[1px] border-solid border-secondaryOpacity3 whitespace-[10px] pt-[50px] pb-6 lg:py-[50px] text-secondary"
					>
						{aboutPageData.data?.data.attributes.managers_section_text}
					</Paragraph>
					<div className="pt-20 pb-[50px] md:py-[100px]">
						<Heading
							as="h3"
							className="!leading-[normal] text-secondary uppercase text-[32px] lg:text-[64px] lg:max-w-[50%] pb-8 md:pb-16"
						>
							{aboutPageData.data?.data.attributes.managers_section_title}
						</Heading>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-12 md:gap-y-14">
							{
								managers.data?.data.map((manager) => (
									<Link
										target='_blank'
										href={`mailto:${manager.attributes.manager_email}`}
										key={manager.id}
									>
										<EmployeeCard
											image={{
												width: manager.attributes.manager_picture.data.attributes.width,
												height: manager.attributes.manager_picture.data.attributes.height,
												url: getBackendImage(manager.attributes.manager_picture.data.attributes.url),
												name: manager.attributes.manager_picture.data.attributes.name,
											}}
											name={manager.attributes.manger_name}
											job={manager.attributes.manager_position}
										/>
									</Link>

								))
							}
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default OrganizationalStructurePage;
