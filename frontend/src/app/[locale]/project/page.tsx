// import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import type {
	DynamicMetadata,
	PageType,
} from '@/types/component.types';
import Image from 'next/image';
import { getProjectDetailPage } from '@/api/pages/getProjectDetailPage.api';
import EmblaCarousel from '@/components/navigation/EmblaSlider';
// import { RouterConfig } from '@/configs/router.config';
import { getBackendImage } from '@/utils/getBackendImage';
import Location from '@public/location-green.svg';
import Afs1 from '@public/project-icons/afs1.svg';
import Afs2 from '@public/project-icons/afs2.svg';
import Project1 from '@public/project-icons/project1.svg';
import Project2 from '@public/project-icons/project2.svg';
import Project3 from '@public/project-icons/project3.svg';
import Project4 from '@public/project-icons/project4.svg';
import Project5 from '@public/project-icons/project5.svg';
import Project6 from '@public/project-icons/project6.svg';
import Project7 from '@public/project-icons/project7.svg';
import Project8 from '@public/project-icons/project8.svg';
import Banner2 from '@public/project2.png';
import { CarouselItem } from './_components/CarouselItem';
import { getCarousel } from '@/api/carousel/getCarousel.api';
import type { Metadata } from 'next';
import { getDefaultBlurImage } from '@/utils/getBlurImage';
// import Factory from '@public/facroty.png';
// import Factory2 from '@public/factory2.png';
// import Banner from '@public/project.png';

export const generateMetadata: DynamicMetadata = async ({
	params,
}): Promise<Metadata> => {
	const { locale } = await params;
	const projectDetailPageData = await getProjectDetailPage(locale);

	return {
		title: projectDetailPageData.data?.data.attributes.page_title,
		description: projectDetailPageData.data?.data.attributes.about_section_text,
		openGraph: {
			title: projectDetailPageData.data?.data.attributes.page_title,
			description:
				projectDetailPageData.data?.data.attributes.about_section_text,
			images: [
				{
					url: getBackendImage(
						projectDetailPageData.data?.data.attributes.heading_section_picture
							.data.attributes.url,
					),
					width:
						projectDetailPageData.data?.data.attributes.heading_section_picture
							.data.attributes.width,
					height:
						projectDetailPageData.data?.data.attributes.heading_section_picture
							.data.attributes.height,
					alt: projectDetailPageData.data?.data.attributes
						.heading_section_picture.data.attributes.name,
				},
			],
		},
	};
};

const ProjectDetailsPage: PageType = async ({ params }) => {
	const { locale } = await params;

	// const breadcrumHomeLocale = locale === 'en' ? 'Main' : 'Asosiy';
	// const breadcrumPageLocale =
	// 	locale === 'en' ? 'Project Details' : 'Loyiha tafsilotlari';
	const projectPeriodLocale =
		locale === 'en' ? 'Project Period:' : 'Loyiha davri:';
	const projectFirstPhaseLocale = locale === 'en' ? 'Phase 1' : '1-chi bosqich';
	const projectSecondPhaseLocale = locale === 'en' ? 'Phase 2' : '2-chi bosqich';
	const projectLocationLocale =
		locale === 'en' ? 'Project Location:' : 'Loyiha joylashuvi:';

	const projectDetailPageData = await getProjectDetailPage(locale);
	const carouselData = await getCarousel(locale);

	const carouselItems = carouselData.data?.data || [];

	return (
		<>
			<section className="bg-backgroundImage1 relative overflow-hidden">
				<Container className="pt-[104px] sm:pt-[164px] pb-8 xl:pb-11 grid xl:grid-cols-2 items-center">
					<div>
						{/* <Breadcrumbs
							textHome={breadcrumHomeLocale}
							textPage={breadcrumPageLocale}
							urlHome={RouterConfig.Home}
							urlPage={RouterConfig.ProjectDetails}
						/> */}
						<Image
							src={getBackendImage(
								projectDetailPageData.data?.data.attributes
									.heading_section_picture.data.attributes.url,
							)}
							width={
								projectDetailPageData.data?.data.attributes
									.heading_section_picture.data.attributes.width
							}
							height={
								projectDetailPageData.data?.data.attributes
									.heading_section_picture.data.attributes.height
							}
							alt={
								projectDetailPageData.data?.data.attributes
									.heading_section_picture.data.attributes.name || ''
							}
							className="object-cover my-8 xl:my-0 max-h-[250px] sm:max-h-[350px] xl:hidden object-center rounded-xl h-full"
							priority={true}
							placeholder="blur"
							blurDataURL={getDefaultBlurImage}
						/>
						<Heading className="!leading-[normal] text-secondary uppercase pb-8 xl:pt-[75px] xl:pb-[50px] text-5xl lg:text-[100px]">
							{
								projectDetailPageData.data?.data.attributes
									.heading_section_title
							}
						</Heading>
						<div className="pb-8 lg:pb-12 border-b-[1px] border-solid border-secondaryOpacity3">
							<Heading
								as="h2"
								className="text-base lg:text-lg text-secondary font-semibold pb-8 lg:pb-11"
							>
								{projectPeriodLocale}
							</Heading>
							<div className="flex flex-col gap-y-4">
								<div className="flex flex-row items-center justify-start gap-x-[18px] lg:gap-x-6">
									<div className="flex flex-row items-center w-fit py-[10px] pl-3 pr-3 lg:pr-6 gap-x-3 bg-button1 rounded-[38px]">
										<span className="w-[6px] h-[6px] bg-white rounded-full" />
										<Paragraph className="text-sm !text-nowrap lg:text-lg text-white tracking-[2px]">
											{projectFirstPhaseLocale}
										</Paragraph>
									</div>
									<Paragraph className="text-sm lg:text-2xl text-secondary">
										{
											projectDetailPageData.data?.data.attributes
												.heading_first_phase
										}
									</Paragraph>
								</div>
								<div className="pl-3 flex">
									<span className="w-6 h-[1px] bg-secondaryOpacity3 rotate-90" />
								</div>
								<div className="flex flex-row items-center justify-start gap-x-[18px] lg:gap-x-6">
									<div className="flex flex-row items-center w-fit py-[10px] pl-3 pr-3 lg:pr-6 gap-x-3 bg-primary rounded-[38px]">
										<span className="w-[6px] h-[6px] bg-white rounded-full" />
										<Paragraph className="text-sm !text-nowrap lg:text-lg text-white tracking-[2px]">
											{projectSecondPhaseLocale}
										</Paragraph>
									</div>
									<Paragraph className="text-sm lg:text-2xl text-secondary">
										{
											projectDetailPageData.data?.data.attributes
												.heading_second_phase
										}
									</Paragraph>
								</div>
							</div>
						</div>
						<div className="pt-11">
							<Heading
								as="h2"
								className="text-base lg:text-lg text-secondary font-semibold pb-9"
							>
								{projectLocationLocale}
							</Heading>
							<div className="flex flex-row gap-x-6 items-center lg:pb-20">
								<div className="bg-white rounded-full min-w-[60px] h-[60px] flex items-center justify-center">
									<Image
										src={Location}
										alt="Icon Enersok"
										className="w-[26px] h-auto"
									/>
								</div>
								<Paragraph className="text-sm lg:text-lg text-secondary hover:text-button1 duration-200">
									{
										projectDetailPageData.data?.data.attributes
											.heading_location_address
									}
								</Paragraph>
							</div>
						</div>
					</div>
					<div className="relative z-10 pl-14 hidden xl:block min-h-[664px] max-h-[664px]">
						<Image
							src={getBackendImage(
								projectDetailPageData.data?.data.attributes
									.heading_section_picture.data.attributes.url,
							)}
							width={
								projectDetailPageData.data?.data.attributes
									.heading_section_picture.data.attributes.width
							}
							height={
								projectDetailPageData.data?.data.attributes
									.heading_section_picture.data.attributes.height
							}
							alt={
								projectDetailPageData.data?.data.attributes
									.heading_section_picture.data.attributes.name || ''
							}
							className="object-cover object-center min-h-[664px] max-h-[664px] rounded-xl h-full"
							priority={true}
							placeholder="blur"
							blurDataURL={getDefaultBlurImage}
						/>
					</div>
				</Container>
				<Image
					src={getBackendImage(
						projectDetailPageData.data?.data.attributes
							.heading_background_picture.data.attributes.url,
					)}
					width={
						projectDetailPageData.data?.data.attributes
							.heading_background_picture.data.attributes.width
					}
					height={
						projectDetailPageData.data?.data.attributes
							.heading_background_picture.data.attributes.height
					}
					alt={
						projectDetailPageData.data?.data.attributes
							.heading_background_picture.data.attributes.name || ''
					}
					className="absolute hidden lg:block bottom-0 right-[-200px] z-[1] bg-blend-multiply opacity-40"
					priority={true}
				/>
			</section>
			<section>
				<Container className="py-20 lg:py-40">
					<Heading
						as="h2"
						className="text-secondary text-[32px] lg:text-6xl uppercase pb-3 lg:pb-11"
					>
						{projectDetailPageData.data?.data.attributes.about_section_title}
					</Heading>
					<Paragraph className="text-sm lg:text-2xl text-secondary pb-20 lg:pb-[95px]">
						{projectDetailPageData.data?.data.attributes.about_section_text}
					</Paragraph>
					<EmblaCarousel
						className="[&>div>div>div]:!flex-[0_0_100%] [&>div>div>div]:sm:!flex-[0_0_50%] [&>div>div>div]:lg:!flex-[0_0_33.3333%] [&>div:nth-last-of-type(1)]:hidden [&>div:nth-last-of-type(1)]:lg:flex"
						showCounter={false}
						slidesToShow={3}
						slides={carouselItems.map((carousel) => (
							<CarouselItem
								key={carousel.id}
								picture={{
									url: getBackendImage(
										carousel.attributes.picture.data.attributes.url,
									),
									width: carousel.attributes.picture.data.attributes.width,
									height: carousel.attributes.picture.data.attributes.height,
									name: carousel.attributes.picture.data.attributes.name,
								}}
							/>
						))}
					/>
				</Container>
			</section>
			<section className="bg-backgroundImage1 relative overflow-hidden">
				<Container className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-32 py-12 lg:pt-[150] lg:pb-[83px]">
					<div>
						<Paragraph className="text-secondary text-[32px] lg:text-6xl pb-10 lg:pb-0 uppercase">
							{projectDetailPageData.data?.data.attributes.info_section_title}
						</Paragraph>
					</div>
					<div className="flex flex-col">
						<div className="flex flex-row gap-x-3 lg:gap-x-14 items-center lg:items-start pb-6 border-b-[1px] border-solid border-secondaryOpacity3">
							<Image src={Project1} alt="Project1 Enersok" />
							<Paragraph className="text-secondary text-sm lg:text-2xl">
								{
									projectDetailPageData.data?.data.attributes
										.info_section_first_text
								}
							</Paragraph>
						</div>
						<div className="flex flex-row gap-x-3 lg:gap-x-14 items-center lg:items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3">
							<Image src={Project2} alt="Project1 Enersok" />
							<Paragraph className="text-secondary text-sm lg:text-2xl">
								{
									projectDetailPageData.data?.data.attributes
										.info_section_second_text
								}
							</Paragraph>
						</div>
						<div className="flex flex-row gap-x-3 lg:gap-x-14 items-center lg:items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3">
							<Image src={Project3} alt="Project1 Enersok" />
							<Paragraph className="text-secondary text-sm lg:text-2xl">
								{
									projectDetailPageData.data?.data.attributes
										.info_section_third_text
								}
							</Paragraph>
						</div>
						<div className="flex flex-row gap-x-3 lg:gap-x-14 items-center lg:items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3">
							<Image src={Project4} alt="Project1 Enersok" />
							<Paragraph className="text-secondary text-sm lg:text-2xl">
								{
									projectDetailPageData.data?.data.attributes
										.info_section_fourth_text
								}
							</Paragraph>
						</div>
						<div className="flex flex-row gap-x-3 lg:gap-x-14 items-center lg:items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3">
							<Image src={Project5} alt="Project1 Enersok" />
							<Paragraph className="text-secondary text-sm lg:text-2xl">
								{
									projectDetailPageData.data?.data.attributes
										.info_section_five_text
								}
							</Paragraph>
						</div>
						<div className="flex flex-row gap-x-3 lg:gap-x-14 items-center lg:items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3">
							<Image src={Project6} alt="Project1 Enersok" />
							<Paragraph className="text-secondary text-sm lg:text-2xl">
								{
									projectDetailPageData.data?.data.attributes
										.info_section_six_text
								}
							</Paragraph>
						</div>
						<div className="flex flex-row gap-x-3 lg:gap-x-14 items-center lg:items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3">
							<Image src={Project7} alt="Project1 Enersok" />
							<Paragraph className="text-secondary text-sm lg:text-2xl">
								{
									projectDetailPageData.data?.data.attributes
										.info_section_seven_text
								}
							</Paragraph>
						</div>
						<div className="flex flex-row gap-x-3 lg:gap-x-14 items-center lg:items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3">
							<Image src={Project8} alt="Project1 Enersok" />
							<Paragraph className="text-secondary text-sm lg:text-2xl">
								{
									projectDetailPageData.data?.data.attributes
										.info_section_eight_text
								}
							</Paragraph>
						</div>
					</div>
				</Container>
				<Image
					src={getBackendImage(
						projectDetailPageData.data?.data.attributes
							.info_section_background_picture.data.attributes.url,
					)}
					width={
						projectDetailPageData.data?.data.attributes
							.info_section_background_picture.data.attributes.width
					}
					height={
						projectDetailPageData.data?.data.attributes
							.info_section_background_picture.data.attributes.height
					}
					alt={
						projectDetailPageData.data?.data.attributes
							.info_section_background_picture.data.attributes.name || ''
					}
					className="left-[0] hidden lg:block bottom-0 absolute bg-blend-darken opacity-80"
					placeholder="blur"
					blurDataURL={getDefaultBlurImage}
				/>
			</section>
			<section>
				<Container className="py-20 lg:py-[220px] grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 items-center">
					<div>
						<Heading
							as="h2"
							className="text-[32px] lg:text-[64px] text-secondary uppercase !leading-[normal] pb-8 lg:pb-[60px]"
						>
							{projectDetailPageData.data?.data.attributes.follow_section_title}
						</Heading>
						<div className="w-full h-full lg:hidden rounded-xl min-h-[250px] sm:min-h-[350px] max-h-[250px] sm:max-h-[350px] mb-8 lg:mb-0">
							<Image
								src={Banner2}
								alt="Project Banner2 Eneksok"
								className="object-cover object-center w-full h-full rounded-xl min-h-[250px] sm:min-h-[350px] max-h-[250px] sm:max-h-[350px]"
							/>
						</div>
						<div>
							<div className="flex flex-row gap-x-3 lg:gap-x-7 pb-[38px] border-b-[1px] border-solid border-secondaryOpacity3">
								<div className="flex min-w-12 h-12 items-center justify-center bg-primary rounded-xl">
									<Image src={Afs1} alt="AFs1 Enersok" className="" />
								</div>
								<Paragraph className="text-sm lg:text-2xl text-secondary">
									{
										projectDetailPageData.data?.data.attributes
											.follow_section_first_text
									}
								</Paragraph>
							</div>
							<div className="flex flex-row gap-x-3 lg:gap-x-7 pt-7">
								<div className="flex min-w-12 h-12 items-center justify-center bg-button1 rounded-xl">
									<Image src={Afs2} alt="AFs1 Enersok" className="" />
								</div>
								<Paragraph className="text-sm lg:text-2xl text-secondary">
									{
										projectDetailPageData.data?.data.attributes
											.follow_section_second_text
									}
								</Paragraph>
							</div>
						</div>
					</div>
					<div className="w-full h-full hidden lg:block rounded-xl min-h-[687px] max-h-[687px]">
						<Image
							src={getBackendImage(
								projectDetailPageData.data?.data.attributes
									.follow_section_picture.data.attributes.url,
							)}
							width={
								projectDetailPageData.data?.data.attributes
									.follow_section_picture.data.attributes.width
							}
							height={
								projectDetailPageData.data?.data.attributes
									.follow_section_picture.data.attributes.height
							}
							alt={
								projectDetailPageData.data?.data.attributes
									.follow_section_picture.data.attributes.name || ''
							}
							className="object-cover object-center w-full min-h-[687px] max-h-[687px] h-full rounded-xl"
							placeholder="blur"
							blurDataURL={getDefaultBlurImage}
						/>
					</div>
				</Container>
			</section>
		</>
	);
};

export default ProjectDetailsPage;
