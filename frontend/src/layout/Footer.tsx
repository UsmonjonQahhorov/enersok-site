import Image from 'next/image';
import type { FC } from 'react';
// import Logo from '@public/logo-white.png';
import { getFooter } from '@/api/layout/getFooter.api';
import { Container } from '@/components/ui/Container';
import { Paragraph } from '@/components/ui/Paragraph';
import { SocialIcon } from '@/components/ui/SocialIcon';
import type { Locale } from '@/configs/i18n.config';
import { RouterConfig } from '@/configs/router.config';
import { Link as NavigationLink } from '@/i18n/routing';
import { mobileNavigation } from '@/locales/navigations';
import { cn } from '@/utils/cn';
import { getBackendImage } from '@/utils/getBackendImage';
import Email from '@public/footer-icons/email.svg';
import Location from '@public/footer-icons/location.svg';
import Phone from '@public/footer-icons/phone.svg';
import Time from '@public/footer-icons/time.svg';
import LinkedIn from '@public/socials/linked-in.svg';
import Telegram from '@public/socials/telegram.svg';
import Link from 'next/link';

export const Footer: FC<FooterProps> = async ({ locale, className }) => {

	const footerData = await getFooter();
	const year = new Date().getFullYear();

	return (
		<footer className={cn(className, 'bg-footer')}>
			<Container className="flex flex-col">
				<div
					className={
						'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr,1fr,1.5fr] md:gap-x-14 xl:gap-x-28 2xl:gap-x-56 pt-12 pb-8 md:py-24 md:border-b border-[rgba(255,_255,_255,_0.12)]'
					}
				>
					<Link className='pb-8 md:pb-0' href={RouterConfig.Home}>
						<Image
							src={getBackendImage(footerData.data?.data.attributes.logo.data.attributes.url)}
							width={footerData.data?.data.attributes.logo.data.attributes.width}
							height={footerData.data?.data.attributes.logo.data.attributes.height}
							alt="Enersok Logo"
							priority={true}
							className="w-[195px] h-fit"
						/>
					</Link>
					<ul className="flex flex-col text-left gap-y-1">
						{
							mobileNavigation.map((menu) => (
								<li key={menu.href}>
									<NavigationLink
										locale={locale}
										className="text-2xl text-white font-normal hover:text-button1 duration-200"
										href={menu.href}
									>
										{locale === 'en' && menu.name_en}
										{locale === 'uz' && menu.name_uz}
									</NavigationLink>
								</li>
							))
						}
					</ul>
					<ul className="hidden lg:flex flex-col gap-y-4">
						<li>
							<Link
								className={'flex flex-row items-start gap-x-1'}
								href={`tel:${footerData.data?.data.attributes.phone}`}
							>
								<Image
									alt="Phone Enersok"
									src={Phone}
									width={16}
									height={16}
									className="w-4 h-4"
								/>
								<span className="w-full text-white text-base leading-5 hover:text-button1 duration-200">
									{footerData.data?.data.attributes.phone}
								</span>
							</Link>
						</li>
						<li>
							<Link
								className={'flex flex-row items-start gap-x-1'}
								href={`mailto:${footerData.data?.data.attributes.email}`}
							>
								<Image
									alt="Email Enersok"
									src={Email}
									width={16}
									height={16}
									className="w-4 h-4"
								/>
								<span className="w-full text-white text-base leading-5 hover:text-button1 duration-200">
									{footerData.data?.data.attributes.email}
								</span>
							</Link>
						</li>
						<li className="w-full">
							<Link
								className={'flex flex-row items-start gap-x-1'}
								href={footerData.data?.data.attributes.address_link || ''}
							>
								<Image
									alt="Adress Enersok"
									src={Location}
									className="w-4 h-4"
								/>
								<span className="w-full text-white text-base leading-5 hover:text-button1 duration-200">
									{footerData.data?.data.attributes.address_text}
								</span>
							</Link>
						</li>
						<li>
							<Paragraph className={'flex flex-row items-start gap-x-1'}>
								<Image
									alt="Time Work Enersok"
									src={Time}
									width={16}
									height={16}
									className="w-4 h-4"
								/>
								<span className="w-full text-white text-base leading-5">
									{footerData.data?.data.attributes.work_hours_text}
								</span>
							</Paragraph>
						</li>
					</ul>
				</div>
				<div className="pb-6 md:pt-4 md:pb-[100px] flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
					<Paragraph size="sm" className="text-white hover:text-button1 duration-200 tracking-widest md:tracking-normal">
						© {year} Enersok
					</Paragraph>
					<ul className="flex gap-x-3 pb-8 md:pb-0">
						<li>
							<SocialIcon
								url={footerData.data?.data.attributes.telegram_link || ''}
								src={Telegram}
								alt={'Enersok Telegram'}
							/>
						</li>
						<li>
							<SocialIcon
								url={footerData.data?.data.attributes.linkedIn_link || ''}
								src={LinkedIn}
								alt={'Enersok LinkedIn'}
							/>
						</li>
					</ul>
				</div>
			</Container>
		</footer>
	);
};

interface FooterProps {
	className?: string;
	locale: Locale;
}
