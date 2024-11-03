import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { RouterConfig } from '@/configs/router.config';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Factory from '@public/facroty.png';
import Sponsor1 from '@public/sponsors/sponsor1.png';
import Sponsor2 from '@public/sponsors/sponsor2.png';
import Sponsor3 from '@public/sponsors/sponsor3.png';
import Sponsor4 from '@public/sponsors/sponsor4.png';
import Sponsor5 from '@public/logo.png';
import Line1 from '@public/sponsors/line1.png';
import Line2 from '@public/sponsors/line2.png';
import { Paragraph } from '@/components/ui/Paragraph';
import { SponsorCardInfo } from '@/components/ui/SponsorCardInfo';
import { SponsorCard } from '@/components/ui/SponsorCard';

const AboutSponsorsPage: PageType = () => {
	return (
		<>
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[164px] pb-5">
					<Breadcrumbs
						textHome={'Main'}
						textPage={'About Sponsors'}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.AboutSponsors}
					/>
					<Heading className="!leading-[normal] w-1/2 text-secondary uppercase py-[75px] text-[100px]">
						About Sponsors
					</Heading>
				</Container>
				<Image
					src={Factory}
					alt="Banner Enersok"
					className="absolute bottom-0 right-[122px]"
					priority={true}
				/>
			</section>
			<section>
				<Container className="pt-[133px] pb-[160px]">
					<div className="w-2/5">
						<Heading as="h3" className="text-[64px] text-secondary uppercase">
							Distribution
						</Heading>
						<Paragraph className="text-lg text-secondary">
							Enersok FE LLC was formed in 2022 by the Consortium of Electricite
							De France (EDF), Nebras Power (Qatar), Sojitz Corporation and
							Kyuden International (Japan), Enersok FE LLC
						</Paragraph>
					</div>
					<div className="pt-20">
						<div className="w-full flex flex-col items-center relative">
							<Heading
								as="h4"
								className="text-2xl text-secondary absolute top-[-12px] px-4 bg-white -translate-x-1/2 left-[50%]"
							>
								Project Sponsors
							</Heading>
							<Image src={Line1} alt="Line1 Enersok" className="pb-3 px-4" />
							<div className="grid grid-cols-4 gap-x-3">
								<SponsorCard
									image={{
										width: Sponsor1.width,
										height: Sponsor1.height,
										url: Sponsor1.src,
										name: 'Sponsor1',
									}}
									title="EDF International S.A.S."
									text="33,3%"
								/>
								<SponsorCard
									image={{
										width: Sponsor2.width,
										height: Sponsor2.height,
										url: Sponsor2.src,
										name: 'Sponsor2',
									}}
									title="Nebras Power Investment Management B.V."
									text="33,3%"
								/>
								<SponsorCard
									image={{
										width: Sponsor3.width,
										height: Sponsor3.height,
										url: Sponsor3.src,
										name: 'Sponsor3',
									}}
									title="Sojitz Corporation"
									text="19%"
								/>
								<SponsorCard
									image={{
										width: Sponsor4.width,
										height: Sponsor4.height,
										url: Sponsor4.src,
										name: 'Sponsor4',
									}}
									title="Kyuden International Corporation"
									text="14,3%"
								/>
							</div>
							<Image src={Line2} alt="Line2 Enersok" />
							<div className="flex flex-col items-center">
								<Heading as="h5" className="text-center py-3">
									Holding Сompany
								</Heading>
								<div className="min-h-[116px] min-w-[343px] bg-[#F2F7FA] rounded-xl flex justify-center items-center px-3">
									<Paragraph className="text-center text-[32px] text-[#5055E6]">
										NEKS Energy B.V.
									</Paragraph>
								</div>
								<span className="w-[2px] h-[73px] bg-black" />
							</div>
							<div className="flex flex-col items-center">
								<Heading as="h5" className="text-center py-3">
									Project Сompany
								</Heading>
								<div className="min-h-[116px] min-w-[343px] bg-[#F2F7FA] rounded-xl flex justify-center items-center px-3">
									<Image
										src={Sponsor5}
										alt="Sponsor5 Enersok"
										className="max-h-[47px] w-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
			<section>
				<Container className="pb-36">
					<Heading
						as="h3"
						className="text-[64px] text-secondary uppercase pb-28"
					>
						Sponsors
					</Heading>
					<div className="flex flex-col gap-y-12">
						<SponsorCardInfo
							image={{
								width: Sponsor1.width,
								height: Sponsor1.height,
								url: Sponsor1.src,
								name: 'Sponsor1',
							}}
							title="EDF Group"
							text="The EDF Group is a key player in the energy transition, as an integrated energy operator engaged in all aspects of the energy business: power generation, transmission, distribution, trading, energy sales and energy services. The EDF Group is a world leader in low-carbon energy, with a diverse generation mix based mainly on nuclear and renewable energy (including hydropower). It is also investing in new technologies to support the energy transition. EDF’s raison d’être is to build a net zero energy future with electricity and innovative solutions and services, to help save the planet and drive well-being and economic development. The EDF Group helps provide energy and services to approximately 39.8 million customers, 30.3 million of them in France."
							linkText="www.edf.fr"
							url="https://www.edf.fr/"
						/>
						<SponsorCardInfo
							image={{
								width: Sponsor2.width,
								height: Sponsor2.height,
								url: Sponsor2.src,
								name: 'Sponsor2',
							}}
							title="Nebras Power Q.P.S.C."
							text='Nebras Power, a global power development and investment company, was established in 2014 and it is headquartered in Doha, Qatar. The company is a wholly owned venture of Qatar Electricity and Water Company ("QEWC"), (which is a Government Related Entity (“GRE”). It owns 21 power plants (operational and under construction) with a gross capacity of 6.6 GW across conventional power and Renewable Energy projects. It has three operational gas-fired power plants in Jordan and Oman. and one under construction in Bangladesh.'
							linkText="www.nebras-power.com"
							url="https://www.nebras-power.com/"
						/>
						<SponsorCardInfo
							image={{
								width: Sponsor3.width,
								height: Sponsor3.height,
								url: Sponsor3.src,
								name: 'Sponsor3',
							}}
							title="Sojitz Corporation"
							text="Sojitz Group is engaged in a wide range of businesses globally as trading and investment house, including manufacturing, selling, importing, and exporting a variety of products, in addition to providing services and investing in diversified businesses, both in Japan and overseas. Sojitz has more than 70 office over the world and operates with a 7-division structure comprising the Automotive Division; the Aerospace & Transportation Project Division; the Infrastructure & Healthcare Division; the Metals, Mineral Resources & Recycling Division; the Chemicals Division; the Consumer Industry & Agriculture Business Division; and the Retail & Consumer Service Division."
							linkText="www.sojitz.com "
							url="https://www.sojitz.com/en/"
						/>
						<SponsorCardInfo
							image={{
								width: Sponsor4.width,
								height: Sponsor4.height,
								url: Sponsor4.src,
								name: 'Sponsor4',
							}}
							title="Kyuden International Corporation"
							text="Kyuden International Corporation (KIC) a wholly-owned subsidiary of Kyushu Electric Power Company in overseas business, providing electricity-focused energy solutions globally, and contributing to the creation of a future society that is both comfortable and environmentally-friendly. Kyushu Electric Power Company is one of magor utilities in Japan, covering power generation, transmission, and distribution, which operates more than 17 GW of power facilities using thermal, geothermal, hydro and nuclear with approx. 144,000 km of high- and low-voltage transmission systems. Using the technology and know-how that has been accumulated in Japan and abroad, KIC is developing overseas power business and consulting services. KIC’s power generation equity ownership capacity is approx. 2.8 GW with 22 projects in 16 countries."
							linkText="www.kyuden-intl.co.jp"
							url="https://www.kyuden-intl.co.jp/en/"
						/>
					</div>
				</Container>
			</section>
		</>
	);
};

export default AboutSponsorsPage;
