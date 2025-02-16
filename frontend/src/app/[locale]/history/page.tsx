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
			{/* Developments */}
			<section className='pt-[110px] sm:pt-[170px] md:pb-5'>
				<Container className="pb-[140px]">
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
