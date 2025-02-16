import { getDocuments } from '@/api/documents/getDocuments.api';
import { getDGPage } from '@/api/pages/getD&GPage.api';
// import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { DownloadFile } from '@/components/ui/DownloadFile';
import { Heading } from '@/components/ui/Heading';
// import { Paragraph } from '@/components/ui/Paragraph';
// import { RouterConfig } from '@/configs/router.config';
import type {
	DynamicMetadata,
	PageType,
} from '@/types/component.types';
import { getBackendImage } from '@/utils/getBackendImage';
import Markdown from 'markdown-to-jsx';
import type { Metadata } from 'next';
import Image from 'next/image';

export const generateMetadata: DynamicMetadata = async ({
	params,
}): Promise<Metadata> => {
	const { locale } = await params;
	const DGPageData = await getDGPage(locale);

	return {
		title: DGPageData.data?.data.attributes.page_title,
		description: DGPageData.data?.data.attributes.about_text,
		robots: 'index, follow',
		openGraph: {
			title: DGPageData.data?.data.attributes.page_title,
			description: DGPageData.data?.data.attributes.about_text,
			locale: locale,
			tags:
				locale === 'en'
					? ['Enersok', 'Enersok company', 'Enersok documents and guidelines']
					: [
						'Enersok',
						'Enersok kompaniyasi',
						"Enersok hujjatlar va qo'llanmalar",
					],
			images: [
				{
					url: getBackendImage(
						DGPageData.data?.data.attributes.heading_image.data.attributes.url,
					),
					width:
						DGPageData.data?.data.attributes.heading_image.data.attributes
							.width,
					height:
						DGPageData.data?.data.attributes.heading_image.data.attributes
							.height,
					alt: DGPageData.data?.data.attributes.heading_image.data.attributes
						.name,
				},
			],
		},
	};
};

const DocumentsAndGuidelinesPage: PageType = async ({ params }) => {
	const { locale } = await params;
	// const breadcrumHomeLocale = locale === 'en' ? 'Main' : 'Asosiy';
	// const breadcrumPageLocale =
	// 	locale === 'en' ? 'Documents and guidelines' : "Hujjatlar va qo'llanmalar";

	const DGPageData = await getDGPage(locale);
	const documents = await getDocuments(locale);

	return (
		<>
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[104px] sm:pt-[164px] pb-5 relative z-10">
					{/* <Breadcrumbs
						textHome={breadcrumHomeLocale}
						textPage={breadcrumPageLocale}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.DocumentsAndGuidelines}
					/> */}
					<Heading className="!leading-[normal] text-secondary uppercase pt-[48px] pb-[32px] lg:py-[75px] text-[32px] lg:text-[100px]">
						{DGPageData.data?.data.attributes.heading_text}
					</Heading>
				</Container>
				<Image
					src={getBackendImage(
						DGPageData.data?.data.attributes.heading_image.data.attributes.url,
					)}
					width={
						DGPageData.data?.data.attributes.heading_image.data.attributes.width
					}
					height={
						DGPageData.data?.data.attributes.heading_image.data.attributes
							.height
					}
					alt={
						DGPageData.data?.data.attributes.heading_image.data.attributes
							.name || ''
					}
					className="absolute hidden lg:block bottom-0 right-[122px] bg-blend-multiply opacity-40"
					priority={true}
				/>
			</section>
			<section>
				<Container className="pb-[84px]">
					{/* <Paragraph className="w-full text-sm md:text-2xl whitespace-[10px] pt-[50px] pb-[24px] md:py-[50px] text-secondary border-b-[1px] border-secondaryOpacity3 md:border-[0]">
						{DGPageData.data?.data.attributes.about_text}
					</Paragraph> */}
					<Markdown className='prose text-wrap w-full max-w-full text-sm md:text-xl whitespace-[10px] pt-[50px] pb-[24px] md:py-[50px] text-secondary border-b-[1px] border-secondaryOpacity3 md:border-[0]'>
						{DGPageData.data?.data.attributes.about_text || ''}
					</Markdown>
					<div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 pt-8 md:pt-0">
						{documents.data?.data.map((document) => (
							<DownloadFile
								key={document.id}
								text={document.attributes.document_name}
								url={document.attributes.document.data.attributes.url}
								viewUrl={document.attributes.document_googledrive_link ?? ''}
							/>
						))}
					</div>
				</Container>
			</section>
		</>
	);
};

export default DocumentsAndGuidelinesPage;
