import { getCarousel } from '@/api/carousel/getCarousel.api';
import { getHomePage } from '@/api/pages/getHomePage.api';
import { getSponsors } from '@/api/sponsors/getSponsors.api';
import EmblaCarousel from '@/components/navigation/EmblaSlider';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Link } from '@/i18n/routing';
import type {
	DynamicMetadata,
	PageType,
	RenderBehavior,
} from '@/types/component.types';
import { cn } from '@/utils/cn';
import { getBackendImage } from '@/utils/getBackendImage';
import EcoFriendlyImage from '@public/ecoFriendly.svg';
import EnergyIcon from '@public/energy-icon.svg';
import EnergyImage from '@public/energy.svg';
import LinkImage from '@public/link.svg';
import ReliabilityImage from '@public/reliability.svg';
import NextImage from 'next/image';
import { CarouselItem } from './_components/CarouselItem';
import { SponsorDonutChart } from './_components/Chart';
import { LocationSection } from './_components/LocationSection';
import { NewsCarouselItem } from './_components/NewsCarouselItem';
import { getNews } from '@/api/news/getNews.api';
import { getOriginSlug } from '@/utils/getOriginSlug.util';
import type { Metadata } from 'next';
import { RouterConfig } from '@/configs/router.config';
import { getBlurImage } from '@/utils/getBlurImage';
// import Factory from '@public/facroty.png';
// import Factory2 from '@public/factory2.png';
// import PeopelsImage from '@public/image (1).png';
// import Image1 from '@public/image (4).png';
// import Image2 from '@public/image (5).png';
// import Image3 from '@public/image (6).png';
// import Image4 from '@public/image (7).png';
// import StationImage from '@public/Rectangle 6.png';

export const dynamic: RenderBehavior = 'force-static';

export const generateMetadata: DynamicMetadata = async ({
	params,
}): Promise<Metadata> => {
	const { locale } = await params;
	const aboutPageData = await getHomePage(locale);

	return {
		title: aboutPageData.data?.data.attributes.page_title,
		description: aboutPageData.data?.data.attributes.about_section_text,
		robots: 'index, follow',
		openGraph: {
			title: aboutPageData.data?.data.attributes.page_title,
			description: aboutPageData.data?.data.attributes.about_section_text,
			type: 'website',
			locale: locale,
			images: [
				{
					url: getBackendImage(
						aboutPageData.data?.data.attributes.about_section_first_image.data
							.attributes.url,
					),
					width:
						aboutPageData.data?.data.attributes.about_section_first_image.data
							.attributes.width,
					height:
						aboutPageData.data?.data.attributes.about_section_first_image.data
							.attributes.height,
					alt: aboutPageData.data?.data.attributes.about_section_first_image
						.data.attributes.name,
				},
			],
		},
	};
};

const HomePage: PageType = async ({ params }) => {
	const { locale } = await params;

	const homePageData = await getHomePage(locale);
	const carousel = await getCarousel(locale);
	const sponsors = await getSponsors(locale);
	const newsData = await getNews(locale, 1, 8);

	const readMoreLinkLocale =
		locale === 'en' ? 'Read more about us' : "Biz haqimizda ko'proq o'qing";
	const carouselButtonsText =
		locale === 'en' ? 'All News' : 'Barcha Yangiliklar';
	const newsText = locale === 'en' ? 'News' : 'Yangiliklar';

	// i need array, but every array item should contain 4 carousel items
	const carouselItems = newsData.data?.data || [];
	const carouselItemsArray = [];
	for (let i = 0; i < carouselItems.length; i += 4) {
		carouselItemsArray.push(carouselItems.slice(i, i + 4));
	}
	const carouselItemsArrayWithKeys = carouselItemsArray.map((items, index) => ({
		key: `carousel-group-${index}`,
		items,
	}));

	const aboutFirstImageBlur = await getBlurImage(
		getBackendImage(
			homePageData.data?.data.attributes.about_section_first_image.data
				.attributes.url,
		),
	);
	const aboutSecondImageBlur = await getBlurImage(
		getBackendImage(
			homePageData.data?.data.attributes.about_section_second_image.data
				.attributes.url,
		),
	);
	const communityFirstImageBlur = await getBlurImage(
		getBackendImage(
			homePageData.data?.data.attributes.community_section_first_picture.data
				.attributes.url,
		),
	);
	const communitySecondImageBlur = await getBlurImage(
		getBackendImage(
			homePageData.data?.data.attributes.community_section_second_picture.data
				.attributes.url,
		),
	);
	const communityThirdImageBlur = await getBlurImage(
		getBackendImage(
			homePageData.data?.data.attributes.community_section_third_picture.data
				.attributes.url,
		),
	);
	const communityFourthImageBlur = await getBlurImage(
		getBackendImage(
			homePageData.data?.data.attributes.community_section_fourth_picture.data
				.attributes.url,
		),
	);
	const communityBackgroundImageBlur = await getBlurImage(
		getBackendImage(
			homePageData.data?.data.attributes.community_section_background_picture
				.data.attributes.url,
		),
	);

	return (
		<>
			{/* Heading */}
			<section className="bg-backgroundImage1 relative overflow-hidden pt-[104px] sm:pt-[164px] pb-8 lg:pb-[80px]">
				<Container>
					<EmblaCarousel
						className="[&>div:nth-of-type(2)]:hidden [&>div:nth-of-type(2)]:lg:flex"
						autoLoopInterval={7000}
						slides={
							carousel.data?.data
								? carousel.data?.data.map((item) => (
										<CarouselItem
											key={item.id}
											image={{
												url: getBackendImage(
													item.attributes.picture.data.attributes.url,
												),
												width: item.attributes.picture.data.attributes.width,
												height: item.attributes.picture.data.attributes.height,
												name: item.attributes.picture.data.attributes.name,
											}}
											title={item.attributes.title}
											description={item.attributes.text}
										/>
									))
								: []
						}
						showCounter={true}
						controlsPosition="below"
					/>
				</Container>
				<NextImage
					src={getBackendImage(
						homePageData.data?.data.attributes.heading_background_picture.data
							.attributes.url,
					)}
					width={
						homePageData.data?.data.attributes.heading_background_picture.data
							.attributes.width
					}
					height={
						homePageData.data?.data.attributes.heading_background_picture.data
							.attributes.height
					}
					alt={
						homePageData.data?.data.attributes.heading_background_picture.data
							.attributes.name as string
					}
					className="absolute hidden lg:block bottom-0 right-[-100px] z-[1] bg-blend-multiply opacity-40"
					priority={true}
				/>
			</section>

			{/* Feature section */}
			<section className="py-20 lg:pt-32 lg:pb-64">
				<Container className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-y-4 gap-x-16 justify-evenly *:text-secondary">
					<div className="flex gap-7 items-center">
						<NextImage src={EcoFriendlyImage} alt="Eco-friendly" />
						<div>
							<Heading
								size="base"
								as="h2"
								className="mb-1 2xl:mb-3 text-2xl 2xl:text-4xl"
							>
								{homePageData.data?.data.attributes.feature_section_1_title}
							</Heading>
							<Paragraph size="sm" className="2xl:max-w-80 md:text-lg">
								{homePageData.data?.data.attributes.feature_section_1_text}
							</Paragraph>
						</div>
					</div>
					<div className="flex gap-7 items-center">
						<NextImage src={EnergyImage} alt="Energy" />
						<div>
							<Heading
								size="base"
								as="h2"
								className="mb-1 2xl:mb-3 text-2xl 2xl:text-4xl"
							>
								{homePageData.data?.data.attributes.feature_section_2_title}
							</Heading>
							<Paragraph size="sm" className="2xl:max-w-80  md:text-lg">
								{homePageData.data?.data.attributes.feature_section_2_text}
							</Paragraph>
						</div>
					</div>
					<div className="flex gap-7 items-center">
						<NextImage src={ReliabilityImage} alt="Reliability" />
						<div>
							<Heading
								size="base"
								as="h2"
								className="mb-1 2xl:mb-3 text-2xl 2xl:text-4xl"
							>
								{homePageData.data?.data.attributes.feature_section_3_title}
							</Heading>
							<Paragraph size="sm" className="2xl:max-w-80 md:text-lg">
								{homePageData.data?.data.attributes.feature_section_3_text}
							</Paragraph>
						</div>
					</div>
				</Container>
			</section>

			{/* About section */}
			<section>
				<Container className="flex flex-col lg:flex-row justify-between *:text-secondary gap-y-16 lg:gap-x-36 lg:gap-y-0">
					<div className="flex flex-col lg:flex-col-reverse gap-8 md:gap-20">
						<NextImage
							className="rounded-xl w-full lg:max-w-[450px] xl:max-w-[650px] h-full object-cover "
							src={getBackendImage(
								homePageData.data?.data.attributes.about_section_second_image
									.data.attributes.url,
							)}
							width={
								homePageData.data?.data.attributes.about_section_second_image
									.data.attributes.width
							}
							height={
								homePageData.data?.data.attributes.about_section_second_image
									.data.attributes.height
							}
							alt={
								homePageData.data?.data.attributes.about_section_second_image
									.data.attributes.name || 'station'
							}
							placeholder="blur"
							blurDataURL={aboutSecondImageBlur}
						/>
						<div className="mb-auto">
							<Heading
								as="h2"
								className="text-[32px] md:text-5xl 2xl:text-[64px] uppercase"
							>
								{homePageData.data?.data.attributes.about_section_title}
							</Heading>
							<Paragraph
								size="sm"
								className="md:text-lg leading-7 mt-4 md:mt-6 mb-8 md:mb-12 max-w-[590px]"
							>
								{homePageData.data?.data.attributes.about_section_text}
							</Paragraph>
							<Link
								className="text-xl flex gap-3 items-center"
								href={RouterConfig.AboutCompany}
							>
								{readMoreLinkLocale}
								<span>
									<NextImage src={LinkImage} alt="Link" />
								</span>
							</Link>
						</div>
					</div>
					<div>
						<NextImage
							src={getBackendImage(
								homePageData.data?.data.attributes.about_section_first_image
									.data.attributes.url,
							)}
							width={
								homePageData.data?.data.attributes.about_section_first_image
									.data.attributes.width
							}
							height={
								homePageData.data?.data.attributes.about_section_first_image
									.data.attributes.height
							}
							alt={
								homePageData.data?.data.attributes.about_section_first_image
									.data.attributes.name || 'people'
							}
							className="rounded-xl max-h-[360px] object-cover w-full"
							placeholder="blur"
							blurDataURL={aboutFirstImageBlur}
						/>
						<div className="bg-backgroundImage1 py-8 px-4 rounded-xl md:px-12 md:py-20">
							<Heading
								size="lg"
								as="h2"
								className="md:text-2xl border-b border-black pb-6 mb-6"
							>
								{homePageData.data?.data.attributes.about_section_second_title}
							</Heading>
							<span className="text-[64px] md:text-6xl flex items-center justify-between">
								{homePageData.data?.data.attributes.about_section_info}
								<NextImage src={EnergyIcon} alt="Energy Icon" />
							</span>
							<Paragraph
								size="sm"
								className="md:text-lg leading-5 mt-12 max-w-[590px]"
							>
								{homePageData.data?.data.attributes.about_section_second_text}
							</Paragraph>
						</div>
					</div>
				</Container>
			</section>

			{/* Sponsors */}
			<section className="pt-20 pb-14 md:py-20 xl:py-72 relative overflow-hidden">
				<Container
					className={cn(
						'flex flex-col items-center md:gap-12 *:text-secondary z-10 relative',
						'lg:grid lg:grid-cols-[1.3fr,1.7fr]',
					)}
				>
					<div className="*:text-secondary">
						<Heading as="h2" className={cn('text-[32px] md:text-[64px]')}>
							{homePageData.data?.data.attributes.sponsors_section_title}
						</Heading>
						<Paragraph
							size="sm"
							className={cn('max-w-[590px] mt-2 md:mt-5', 'text-sm md:text-lg')}
						>
							{homePageData.data?.data.attributes.sponsors_section_text}
						</Paragraph>
						<div>
							<Heading as="h2" size="xs" className="mt-8 md:mt-16 uppercase">
								{
									homePageData.data?.data.attributes
										.sponsors_section_sponsors_title
								}
							</Heading>
							<ul className="flex flex-col gap-y-6 mt-11">
								{sponsors.data?.data.map((sponsor) => (
									<li
										key={sponsor.id}
										className="border-b border-borderColor pb-3 flex justify-between"
									>
										<div className="flex gap-4 items-start">
											<span
												style={{
													backgroundColor: sponsor.attributes.sponsor_color,
												}}
												className={cn('size-[22px] rounded-[50%] inline-block')}
											/>
											<Paragraph
												size="sm"
												className={cn('text-lg md:text-2xl !leading-[normal]')}
											>
												{sponsor.attributes.sponsor_name}
											</Paragraph>
										</div>
										<span className="text-lg md:text-2xl !leading-[normal]">
											{sponsor.attributes.sponsor_value}%
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					{/* Chart */}
					<div className="flex justify-center overflow-hidden relative mt-6 md:mt-0">
						<SponsorDonutChart
							data={
								sponsors.data?.data
									? sponsors.data?.data.map((sponsor) => ({
											color: sponsor.attributes.sponsor_color,
											name: sponsor.attributes.sponsor_name,
											value: sponsor.attributes.sponsor_value,
											image: {
												url: getBackendImage(
													sponsor.attributes.sponsor_logo.data.attributes.url,
												),
												width:
													sponsor.attributes.sponsor_logo.data.attributes.width,
												height:
													sponsor.attributes.sponsor_logo.data.attributes
														.height,
												name: sponsor.attributes.sponsor_logo.data.attributes
													.name as string,
											},
										}))
									: []
							}
						/>
					</div>
				</Container>
				<NextImage
					src={getBackendImage(
						homePageData.data?.data.attributes
							.sponsors_section_background_picture.data.attributes.url,
					)}
					width={
						homePageData.data?.data.attributes
							.sponsors_section_background_picture.data.attributes.width
					}
					height={
						homePageData.data?.data.attributes
							.sponsors_section_background_picture.data.attributes.height
					}
					alt={
						homePageData.data?.data.attributes
							.sponsors_section_background_picture.data.attributes
							.name as string
					}
					className="absolute hidden lg:block bottom-0 right-[50px] z-[1]"
				/>
			</section>

			{/* Location section */}
			<section className="py-16 lg:py-60 bg-[#1375A4]">
				<LocationSection
					title={
						homePageData.data?.data.attributes.localtion_section_title || ''
					}
					description={
						homePageData.data?.data.attributes.location_section_text || ''
					}
					firstLocation={
						homePageData.data?.data.attributes
							.location_section_first_location || ''
					}
					secondLocation={
						homePageData.data?.data.attributes
							.location_section_second_location || ''
					}
					firstLocationImage={{
						url: getBackendImage(
							homePageData.data?.data.attributes.location_section_first_picture
								.data.attributes.url,
						),
						width:
							homePageData.data?.data.attributes.location_section_first_picture
								.data.attributes.width || 0,
						height:
							homePageData.data?.data.attributes.location_section_first_picture
								.data.attributes.height || 0,
						name:
							homePageData.data?.data.attributes.location_section_first_picture
								.data.attributes.name || '',
					}}
					secondLocationImage={{
						url: getBackendImage(
							homePageData.data?.data.attributes.location_section_second_picture
								.data.attributes.url,
						),
						width:
							homePageData.data?.data.attributes.location_section_second_picture
								.data.attributes.width || 0,
						height:
							homePageData.data?.data.attributes.location_section_second_picture
								.data.attributes.height || 0,
						name:
							homePageData.data?.data.attributes.location_section_second_picture
								.data.attributes.name || '',
					}}
					firstLocationCompanyName={
						homePageData.data?.data.attributes
							.location_section_first_company_name || ''
					}
					secondLocationCompanyName={
						homePageData.data?.data.attributes
							.location_section_second_company_name || ''
					}
				/>
			</section>

			{/* News Carousel section */}
			<section className="py-24 xl:py-48">
				<Container>
					<EmblaCarousel
						className="[&>a]:mt-10 [&>a]:block [&>a]:md:hidden [&>div:nth-of-type(1)]:mb-8 [&>div:nth-of-type(1)]:md:mb-16 [&>div:nth-of-type(1)>div]:hidden [&>div:nth-of-type(1)>div]:md:flex"
						autoLoopInterval={7000}
						showCounter={false}
						slidesToShow={1}
						controlsPosition="above"
						controlsTitle={newsText}
						controlsButton={{
							link: '/news',
							text: carouselButtonsText,
						}}
						slides={carouselItemsArrayWithKeys?.map((carouselItems) => (
							<NewsCarouselItem
								key={`${carouselItems.key}`}
								data={carouselItems.items.map((item) => ({
									date: item.attributes.preview_date,
									time: item.attributes.preview_time,
									title: item.attributes.preview_title,
									image: {
										url: getBackendImage(
											item.attributes.preview_picture.data.attributes.url,
										),
										width:
											item.attributes.preview_picture.data.attributes.width,
										height:
											item.attributes.preview_picture.data.attributes.height,
										name: item.attributes.preview_picture.data.attributes
											.name as string,
									},
									slug:
										locale === 'en'
											? item.attributes.slug
											: getOriginSlug(item.attributes.localizations),
								}))}
							/>
						))}
					/>
				</Container>
			</section>

			{/* Community */}
			<section className="bg-backgroundImage1 pt-16 md:pt-[150px] pb-[120px] relative overflow-hidden">
				<Container className="flex flex-col-reverse md:grid md:grid-cols-[1fr,0.8fr]">
					<div className="*:text-secondary z-10">
						<Heading
							as="h2"
							className="mt-6 md:mt-0 text-[32px] text-wrap md:text-4xl xl:text-[64px] !leading-[normal] max-w-[780px] uppercase"
						>
							{homePageData.data?.data.attributes.community_section_title}
						</Heading>
						<div>
							<Heading as="h2" className="text-xs md:text-xl mt-10 md:mt-16">
								{
									homePageData.data?.data.attributes
										.community_section_social_title
								}
							</Heading>
							<ul className="flex gap-3 mt-6 items-center">
								<li>
									<a
										href={
											homePageData.data?.data.attributes
												.community_section_telegram_link
										}
										className="w-20 h-20 flex items-center justify-center rounded-full bg-white group hover:bg-[#198ABF] transition-all duration-200 ease-in-out"
									>
										<svg
											className="fill-[#198ABF] group-hover:fill-white"
											width="23"
											height="19"
											viewBox="0 0 23 19"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M20.9165 0.340988L1.11449 7.99452C-0.22184 8.48046 -0.22184 9.33086 0.871522 9.57383L5.8524 11.1531L7.79615 16.9844C8.03912 17.5918 7.91764 17.8348 8.52506 17.8348C9.011 17.8348 9.25397 17.5918 9.49694 17.3488C9.61842 17.2274 10.7118 16.134 11.9266 14.9192L17.029 18.6852C18.0009 19.1711 18.6083 18.9282 18.8513 17.8348L22.2528 1.92029C22.6173 0.583957 21.7669 -0.144951 20.9165 0.340988ZM18.3653 3.98553L8.88951 12.6109L8.52506 16.6199L6.5813 10.7887L17.7579 3.74256C18.2438 3.37811 18.7298 3.62108 18.3653 3.98553Z" />
											<title>Telegram</title>
										</svg>
									</a>
								</li>
								<li>
									<a
										href={
											homePageData.data?.data.attributes
												.community_section_linkedIn_link
										}
										className="w-20 h-20 flex items-center justify-center rounded-full bg-white group hover:bg-[#198ABF] transition-all duration-200 ease-in-out"
									>
										<svg
											className="fill-[#198ABF] group-hover:fill-white w-[25px] h-[25px]"
											version="1.1"
											id="Layer_1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											x="0px"
											y="0px"
											viewBox="0 0 310 310"
											xmlSpace="preserve"
										>
											<g id="XMLID_801_">
												<title>LinkedIn</title>
												<path
													id="XMLID_802_"
													d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
												/>
												<path
													id="XMLID_803_"
													d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
												/>
												<path
													id="XMLID_804_"
													d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
												/>
											</g>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="grid gap-2 p-4 z-10 grid-cols-3 grid-rows-2">
						<NextImage
							className="col-start-2 col-span-2 row-start-1 h-full rounded-lg"
							src={getBackendImage(
								homePageData.data?.data.attributes
									.community_section_first_picture.data.attributes.url,
							)}
							width={
								homePageData.data?.data.attributes
									.community_section_first_picture.data.attributes.width
							}
							height={
								homePageData.data?.data.attributes
									.community_section_first_picture.data.attributes.height
							}
							alt={
								homePageData.data?.data.attributes
									.community_section_first_picture.data.attributes
									.name as string
							}
							placeholder="blur"
							blurDataURL={communityFirstImageBlur}
						/>
						<NextImage
							className="col-start-1 row-span-2 place-self-center w-full rounded-lg"
							src={getBackendImage(
								homePageData.data?.data.attributes
									.community_section_second_picture.data.attributes.url,
							)}
							width={
								homePageData.data?.data.attributes
									.community_section_second_picture.data.attributes.width
							}
							height={
								homePageData.data?.data.attributes
									.community_section_second_picture.data.attributes.height
							}
							alt={
								homePageData.data?.data.attributes
									.community_section_second_picture.data.attributes
									.name as string
							}
							placeholder="blur"
							blurDataURL={communitySecondImageBlur}
						/>
						<NextImage
							className="col-start-2 row-start-2 w-full rounded-lg"
							src={getBackendImage(
								homePageData.data?.data.attributes
									.community_section_third_picture.data.attributes.url,
							)}
							width={
								homePageData.data?.data.attributes
									.community_section_third_picture.data.attributes.width
							}
							height={
								homePageData.data?.data.attributes
									.community_section_third_picture.data.attributes.height
							}
							alt={
								homePageData.data?.data.attributes
									.community_section_third_picture.data.attributes
									.name as string
							}
							placeholder="blur"
							blurDataURL={communityThirdImageBlur}
						/>
						<NextImage
							className="col-start-3 row-start-2 rounded-lg"
							src={getBackendImage(
								homePageData.data?.data.attributes
									.community_section_fourth_picture.data.attributes.url,
							)}
							width={
								homePageData.data?.data.attributes
									.community_section_fourth_picture.data.attributes.width
							}
							height={
								homePageData.data?.data.attributes
									.community_section_fourth_picture.data.attributes.height
							}
							alt={
								homePageData.data?.data.attributes
									.community_section_fourth_picture.data.attributes
									.name as string
							}
							placeholder="blur"
							blurDataURL={communityFourthImageBlur}
						/>
					</div>
				</Container>
				<NextImage
					src={getBackendImage(
						homePageData.data?.data.attributes
							.community_section_background_picture.data.attributes.url,
					)}
					width={
						homePageData.data?.data.attributes
							.community_section_background_picture.data.attributes.width
					}
					height={
						homePageData.data?.data.attributes
							.community_section_background_picture.data.attributes.height
					}
					alt={
						homePageData.data?.data.attributes
							.community_section_background_picture.data.attributes
							.name as string
					}
					placeholder="blur"
					blurDataURL={communityBackgroundImageBlur}
					className="absolute hidden lg:block bottom-0 right-[-100px] z-[1] bg-blend-darken opacity-40"
				/>
			</section>
		</>
	);
};

export default HomePage;
