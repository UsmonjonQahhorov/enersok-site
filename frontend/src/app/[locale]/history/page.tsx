import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import type {
	DynamicMetadata,
	PageType,
} from '@/types/component.types';
import { Suspense } from 'react';
import { Developments } from './_components/Developments';
import { Skeleton } from '@/components/ui/Skeleton';
import { getHistoryPage } from '@/api/pages/getHistoryPage.api';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getBackendImage } from '@/utils/getBackendImage';

export const generateMetadata: DynamicMetadata = async ({
	params,
}): Promise<Metadata> => {
	const { locale } = await params;
	const aboutPageData = await getHistoryPage(locale);

	return {
		title: aboutPageData.data?.data.attributes.page_title
	};
};

const HistoryPage: PageType = async ({ params }) => {
	const { locale } = await params;

	const historyPageData = await getHistoryPage(locale);

	return (
		<>
			{/* Heading */}
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[104px] sm:pt-[164px] pb-5 relative z-10">
					<Heading className="!leading-[normal] text-secondary uppercase pt-[48px] pb-[32px] lg:py-[75px] text-[32px] lg:text-[100px]">
						{historyPageData.data?.data.attributes.heading_title}
					</Heading>
				</Container>
				<Image
					src={getBackendImage(
						historyPageData.data?.data.attributes.heading_image.data.attributes.url,
					)}
					width={
						historyPageData.data?.data.attributes.heading_image.data.attributes.width
					}
					height={
						historyPageData.data?.data.attributes.heading_image.data.attributes
							.height
					}
					alt={
						historyPageData.data?.data.attributes.heading_image.data.attributes
							.name || ''
					}
					className="absolute hidden lg:block bottom-0 right-[122px] bg-blend-multiply opacity-40"
					priority={true}
				/>
			</section>
			{/* Developments */}
			<section>
				<Container className="py-20 sm:py-40 sm:pb-[84px]">
					<Heading
						as="h2"
						className="text-secondary text-[32px] lg:text-[64px] !leading-[normal] pb-8 lg:pb-[50px]"
					>
						{historyPageData.data?.data.attributes.development_section_title}
					</Heading>
					<div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-y-[42px] sm:gap-x-5">
						<Suspense
							fallback={
								<Skeleton className="w-full h-[300px] sm:h-[400px] bg-slate-300" />
							}
						>
							<Developments locale={locale} />
						</Suspense>
					</div>
				</Container>
			</section>
		</>
	);
};

export default HistoryPage;
