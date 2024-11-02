import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { RouterConfig } from '@/configs/router.config';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Time from '@public/time.svg';
import Banner from '@public/image (1).png';
import Telegram from '@public/socials/telegram.svg';
import LinkedIn from '@public/socials/linked-in.svg';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { cn } from '@/utils/cn';

const SingleNewPage: PageType = () => {
	return (
		<>
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[164px] pb-5 flex flex-col items-center">
					<Breadcrumbs
						textHome={'Main'}
						textPage={'News'}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.News}
						className="self-start"
					/>
					<Heading className="!leading-[normal] text-secondary uppercase pt-[75px] pb-[35px] text-[80px] w-3/4">
						Entered into public-private partnership
					</Heading>
					<div className="w-3/4 flex flex-row gap-x-6 relative pb-[253px]">
						<Paragraph>05.08. 2024</Paragraph>
						<div className="flex flex-row gap-x-2 items-center">
							<Image src={Time} alt="Time Icon Enersok" className="w-4 h-4" />
							<Paragraph className="!leading-[normal]">5 min</Paragraph>
						</div>
						<div className="absolute top-14 w-full h-full min-h-[525px] rounded-xl">
							<Image
								src={Banner}
								alt="Banner Enersok"
								className="w-full h-full object-cover object-center rounded-xl"
							/>
						</div>
					</div>
				</Container>
			</section>
			<section>
				<Container className="pt-[405px] flex flex-col items-center">
					<div
						className={cn(
							'w-3/4 pb-[26px] flex flex-col gap-y-6 text-secondary',
							'[&>p]:text-xl [&>p]:pb-6',
							'[&>h1]:text-7xl [&>h2]:text-6xl [&>h3]:text-5xl [&>h4]:text-4xl [&>h5]:text-3xl [&>h6]:text-2xl',
							'[&>ul>li]:relative [&>ul>li]:text-xl [&>ul>li]:pb-3 [&>ul>li]:pl-[18px] [&>ul>li]:whitespace-pre-line [&>ul>li]:before:absolute [&>ul>li]:before:w-[9px] [&>ul>li]:before:h-[9px] [&>ul>li]:before:left-0 [&>ul>li]:before:top-[7px] [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-button1',
							'[&>blockquote]:p-12 [&>blockquote]:rounded-xl [&>blockquote]:bg-[#F2F7FA] [&>blockquote]:text-3xl',
						)}
					>
						<p>
							In 2022, Enersok FE LLC was established as a result of a
							collaboration between four international corporations. The
							consortium that founded Enersok FE LLC consists of Electricite De
							France (EDF), a French energy giant, Nebras Power from Qatar, and
							Japanese corporations Sojitz Corporation and Kyuden International.
							Each of these participants brings extensive experience and
							influence in the energy sector, providing a strong foundation for
							the development of the new company.
						</p>
						<h1>Key Members of the Consortium</h1>
						<ul>
							<li>
								<b>Electricite De France (EDF)</b> – One of the largest energy
								players in the world. The French corporation specializes in
								electricity production, including nuclear, hydroelectric, and
								renewable energy.
							</li>
							<li>
								<b>Nebras Power</b> – A Qatari company that invests in global
								energy projects, focusing on long-term sustainability.
							</li>
							<li>
								<b>Sojitz Corporation</b> – A diversified Japanese corporation
								actively involved in various industries, including energy and
								infrastructure.
							</li>
							<li>
								<b>Kyuden International</b> – The international branch of
								Japan's Kyushu Electric Power, engaged in the development of
								energy projects worldwide.
							</li>
						</ul>
						<p>
							In 2022, Enersok FE LLC was established as a result of a
							collaboration between four international corporations. The
							consortium that founded Enersok FE LLC consists of Electricite De
							France (EDF), a French energy giant, Nebras Power from Qatar, and
							Japanese corporations Sojitz Corporation and Kyuden International.
							Each of these participants brings extensive experience and
							influence in the energy sector, providing a strong foundation for
							the development of the new company.
						</p>
						<blockquote>
							In 2022, Enersok FE LLC was established as a result of a
							collaboration between four international corporations. The
							consortium that founded Enersok FE LLC consists of Electricite De
							France (EDF), a French energy giant
						</blockquote>
						<p>
							Corporation and Kyuden International. Each of these participants
							brings extensive experience and influence in the energy sector,
							providing a strong foundation for the development of the new
							company.
						</p>
					</div>
					<div className="w-3/4 flex flex-row items-center gap-x-3 pt-[65px] pb-[148px] border-t-[1px] border-solid border-secondaryOpacity3">
						<Paragraph className="pr-3 text-xl text-secondary">Share</Paragraph>
						<SocialIcon
							src={Telegram}
							url="https://t.me/SYRDARYA_CCGT_2"
							alt="Enersok Telegram"
							black={true}
						/>
						<SocialIcon
							src={LinkedIn}
							url="http://www.linkedin.com/company/enersok-fe-llc"
							alt="Enersok LinkedIn"
							black={true}
						/>
					</div>
				</Container>
			</section>
		</>
	);
};

export default SingleNewPage;
