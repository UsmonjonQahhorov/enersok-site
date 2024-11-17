'use client';

import {
	Close,
	Content as PopoverContent,
	Root as PopopverRoot,
	Trigger as PopoverTrigger,
} from '@radix-ui/react-popover';
import { Link as NavigationLink, usePathname } from '@/i18n/routing';
import { mobileNavigation } from '@/locales/navigations';
import { cn } from '@/utils/cn';
import { locales } from '@/configs/i18n.config';
import { Sheet, SheetBody, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/navigation/Sheet';
import { getLocale } from '@/utils/getLocale.util';
import Image from 'next/image';
import BurgerMenu from '@public/burger-menu.svg';

export const MobileNavigation = () => {
	const pathName = usePathname();
	const locale = getLocale();

	return (
		<div className="flex items-center gap-x-4 xl:hidden">
			<Sheet>
				<PopopverRoot aria-label="languages">
					<PopoverTrigger
						className={cn(
							'cursor-default px-4 text-xl text-secondary md:cursor-pointer',
						)}
					>
						{locale?.toUpperCase()}
					</PopoverTrigger>
					<PopoverContent
						sideOffset={5}
						className="flex flex-col gap-y-2 rounded-xl bg-white p-2 text-base shadow-xl"
					>
						{locales.map((item) => (
							<Close
								asChild={true}
								className={cn(
									'rounded-xl text-center',
									locale === item
										? 'w-full rounded-xl bg-primary-darker p-2 text-black'
										: 'w-full bg-white p-2 text-primary hover:bg-primary hover:text-white',
								)}
								key={item}
							>
								<NavigationLink href={pathName} locale={item}>
									{item.toUpperCase()}
								</NavigationLink>
							</Close>
						))}
					</PopoverContent>
				</PopopverRoot>
				<SheetTrigger className="flex cursor-default items-center mt-[-4px] sm:mt-[-2px]">
					<Image
						src={BurgerMenu}
						alt='BurgerMenu Enersok'
					/>
				</SheetTrigger>
				<SheetContent className='bg-backgroundImage1'>
					<SheetTitle />
					<SheetBody>
						<ul
							className="flex flex-col gap-y-3 pt-[50px]"
						>
							{mobileNavigation.map((menu) => (
								<li key={menu.href} className="text-secondary text-xl sm:text-2xl">
									<SheetClose asChild={true}>
										<NavigationLink
											locale={locale}
											className="cursor-default"
											href={menu.href}
										>
											{locale === 'en' && menu.name_en}
											{locale === 'uz' && menu.name_uz}
										</NavigationLink>
									</SheetClose>
								</li>
							))}
						</ul>
					</SheetBody>
				</SheetContent>
			</Sheet>
		</div>
	);
};