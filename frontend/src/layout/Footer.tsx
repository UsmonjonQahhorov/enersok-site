import Image from 'next/image';
import type { FC } from 'react';
import Logo from '@public/logo-white.png';
import Telegram from '@public/socials/telegram.svg';
import LinkedIn from '@public/socials/linked-in.svg';
import Email from '@public/footer-icons/email.svg';
import Phone from '@public/footer-icons/phone.svg';
import Time from '@public/footer-icons/time.svg';
import Location from '@public/footer-icons/location.svg';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { Paragraph } from '@/components/ui/Paragraph';
import { Container } from '@/components/ui/Container';
import { RouterConfig } from '@/configs/router.config';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { mobileNavigation } from '@/locales/navigations';
import { getLocale } from '@/utils/getLocale.util';
import { Link as NavigationLink } from '@/i18n/routing';

export const Footer: FC<FooterProps> = ({ className }) => {
	const locale = getLocale();

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
							src={Logo}
							alt="Enersok Footer Logo"
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
								href={'tel:+998770004594'}
							>
								<Image
									alt="Phone Enersok"
									src={Phone}
									width={16}
									height={16}
									className="w-4 h-4"
								/>
								<span className="w-full text-white text-base leading-5 hover:text-button1 duration-200">
									+998 77 000 45 94
								</span>
							</Link>
						</li>
						<li>
							<Link
								className={'flex flex-row items-start gap-x-1'}
								href={'mailto:info@enersok.uz'}
							>
								<Image
									alt="Email Enersok"
									src={Email}
									width={16}
									height={16}
									className="w-4 h-4"
								/>
								<span className="w-full text-white text-base leading-5 hover:text-button1 duration-200">
									info@enersok.uz
								</span>
							</Link>
						</li>
						<li className="w-full">
							<Link
								className={'flex flex-row items-start gap-x-1'}
								href={'https://yandex.uz/maps/-/CDXJyC1C'}
							>
								<Image
									alt="Adress Enersok"
									src={Location}
									className="w-4 h-4"
								/>
								<span className="w-full text-white text-base leading-5 hover:text-button1 duration-200">
									8A Afrosiyob St., Mirabad District, Tashkent city, Uzbekistan,
									Dmaar Business Center
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
									Office hours: Monday - Friday From 9:00 to 18:00
								</span>
							</Paragraph>
						</li>
					</ul>
				</div>
				<div className="pb-6 md:pt-4 md:pb-[100px] flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
					<Paragraph size="sm" className="text-white hover:text-button1 duration-200 tracking-widest md:tracking-normal">
						© 2024 Enersok
					</Paragraph>
					<ul className="flex gap-x-3 pb-8 md:pb-0">
						<li>
							<SocialIcon
								url={'https://t.me/SYRDARYA_CCGT_2'}
								src={Telegram}
								alt={'Enersok Telegram'}
							/>
						</li>
						<li>
							<SocialIcon
								url={'http://www.linkedin.com/company/enersok-fe-llc'}
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
}
