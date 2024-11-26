'use client';

import {
	Content,
	Indicator,
	Item,
	Link,
	List,
	Root,
	Trigger,
} from '@radix-ui/react-navigation-menu';
import {
	Close,
	Content as PopoverContent,
	Root as PopopverRoot,
	Trigger as PopoverTrigger,
} from '@radix-ui/react-popover';
import { cn } from '@/utils/cn';
import { navigation } from '@/locales/navigations';
import { locales } from '@/configs/i18n.config';
import { Link as NavigationLink, usePathname } from '@/i18n/routing';
import { getLocale } from '@/utils/getLocale.util';
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { SearchContent } from './Search';

const queryClient = new QueryClient()
export const DesktopNavigation = () => {
	const pathName = usePathname();
	const locale = getLocale();

	const contactText = locale === 'en' ? 'Contact us' : 'Aloqa';

	return (
		<div className="hidden items-center sm:gap-x-4 md:gap-x-8 xl:flex 2xl:gap-x-20">
			<Root aria-label="navigation">
				<List className="flex lg:gap-x-8 2xl:gap-x-10" aria-label="navigation">
					{navigation.map((menu) =>
						menu.childMenus ? (
							<Item key={menu.href}>
								<Trigger className="whitespace-nowrap text-secondary font-normal xl:text-sm 2xl:text-lg">
									{locale === 'en' && menu.name_en}
									{locale === 'uz' && menu.name_uz}
								</Trigger>
								<Content className="absolute top-10 z-50 flex flex-col gap-y-2 rounded-xl bg-white p-3 shadow-lg">
									{menu.childMenus.map((childMenu) => (
										<Link
											key={childMenu.href}
											asChild={true}
											className={cn(
												'whitespace-nowrap font-normal duration-200 xl:text-sm 2xl:text-lg',
												'rounded-lg p-2 text-secondary hover:bg-primary hover:text-white',
											)}
										>
											<NavigationLink locale={locale} href={childMenu.href}>
												{locale === 'en' && childMenu.name_en}
												{locale === 'uz' && childMenu.name_uz}
											</NavigationLink>
										</Link>
									))}
								</Content>
							</Item>
						) : (
							<Item key={menu.href}>
								<Link asChild={true}>
									<NavigationLink
										locale={locale}
										href={menu.href}
										className={cn(
											'whitespace-nowrap text-secondary hover:text-primary duration-200 text-xs font-normal xl:text-sm 2xl:text-lg',
										)}
									>
										{locale === 'en' && menu.name_en}
										{locale === 'uz' && menu.name_uz}
									</NavigationLink>
								</Link>
							</Item>
						),
					)}
					<Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
						<div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
					</Indicator>
				</List>
			</Root>

			<div className="flex items-center gap-x-6 2xl:gap-x-8">
				{/* Search */}
				<div className="flex items-center gap-x-24 pb-2">
					<QueryClientProvider client={queryClient}>
						<SearchContent />
					</QueryClientProvider>
				</div>
				{/* Select language */}
				<PopopverRoot aria-label="languages">
					<PopoverTrigger
						className={cn(
							'cursor-default px-4 text-base 2xl:text-xl text-secondary md:cursor-pointer',
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
				<NavigationLink
					className="text-base 2xl:text-lg py-3 px-4 2xl:py-4 2xl:px-6 bg-button1 hover:bg-button1/80 duration-200 rounded-[100px] text-white"
					href="/contacts"
					locale={locale}
				>
					{contactText}
				</NavigationLink>
			</div>
		</div>
	);
};
