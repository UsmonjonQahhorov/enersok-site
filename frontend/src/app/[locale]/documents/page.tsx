import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { RouterConfig } from '@/configs/router.config';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Factory from '@public/facroty.png';
import { Paragraph } from '@/components/ui/Paragraph';
import { DownloadFile } from '@/components/ui/DownloadFile';

const DocumentsAndGuidelinesPage: PageType = () => {
	return (
		<>
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[104px] sm:pt-[164px] pb-5 relative z-10">
					<Breadcrumbs
						textHome={'Main'}
						textPage={'Documents and guidelines'}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.DocumentsAndGuidelines}
					/>
					<Heading className="!leading-[normal] text-secondary uppercase pt-[48px] pb-[32px] lg:py-[75px] text-[32px] lg:text-[100px]">
						Documents and guidelines
					</Heading>
				</Container>
				<Image
					src={Factory}
					alt="Banner Enersok"
					className="absolute hidden lg:block bottom-0 right-[122px]"
					priority={true}
				/>
			</section>
			<section>
				<Container className="pb-[84px]">
					<Paragraph
						className="w-full text-sm md:text-2xl whitespace-[10px] pt-[50px] pb-[24px] md:py-[50px] text-secondary border-b-[1px] border-secondaryOpacity3 md:border-[0]"
					>
						Construction period started in March 2023 and the COD (Commercial
						Operating Date) should be reach in June 2026. That means the plant
						will be fully operational with two gas turbines and one steam
						turbine in combined cycle configuration.
					</Paragraph>
					<div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 pt-8 md:pt-0">
						<DownloadFile text="Syrdarya CCGT_ESIA Volume 1 NTS_v1.2" url="/" />
						<DownloadFile text="Syrdarya CCGT_ESIA Volume 2_v1.3" url="/" />
						<DownloadFile text="Syrdarya CCGT_ESIA Volume 3_v1.2" url="/" />
						<DownloadFile text="Syrdarya CCGT_ESIA Volume 4_v1.1" url="/" />
						<DownloadFile
							text="Syrdarya CCGT_LALRP Exec Summary_v.1.0"
							url="/"
						/>
						<DownloadFile
							text="Syrdarya CCGT_Land Acquisition and Livelihoods Restoration Plan_v.1.3"
							url="/"
						/>
						<DownloadFile
							text="Syrdarya CCGT_Stakeholder Engagement Plan_v1.3"
							url="/"
						/>
						<DownloadFile
							text="Syrdarya CCGT_ESIA Vol 1 NTS_v1.2_uzbek version"
							url="/"
						/>
						<DownloadFile text="National EIA_Syrdarya 1600 MW_ru" url="/" />
						<DownloadFile text="National EIA_Syrdarya 1600 MW_en" url="/" />
						<DownloadFile text="Conclusion_Syrdarya 1600MW_ru" url="/" />
					</div>
				</Container>
			</section>
		</>
	);
};

export default DocumentsAndGuidelinesPage;
