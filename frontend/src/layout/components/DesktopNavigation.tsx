import { startTransition, type FC } from 'react';
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
	Portal,
	Root as PopopverRoot,
	Trigger as PopoverTrigger,
} from '@radix-ui/react-popover';
import { cn } from '@/utils/cn';
import NextLink from 'next/link';
import { navigation } from '@/locales/navigations';
import Image from 'next/image';
import Search from '@public/search.svg';

export const DesktopNavigation: FC<DesktopNavigationProps> = ({ locale }) => {
	// const pathName = usePathname();
	// const router = useRouter();

	// function changeLang(locale: string) {
	//   startTransition(() => {
	//     router.replace(pathName, { locale: locale });
	//   });
	// }
	return (
		<div className="hidden items-center sm:gap-x-4 md:gap-x-8 lg:flex 2xl:gap-x-20">
			<Root aria-label="navigation">
				<List className="flex lg:gap-x-8 2xl:gap-x-10" aria-label="navigation">
					{navigation.map((menu) =>
						menu.childMenus ? (
							<Item key={menu.href}>
								<Trigger className="whitespace-nowrap text-secondary font-normal lg:text-base 2xl:text-lg">
									{locale === 'en' && menu.name_en}
									{locale === 'uz' && menu.name_uz}
								</Trigger>
								<Content className="absolute top-10 z-50 flex flex-col gap-y-2 rounded-xl bg-white p-3 shadow-lg">
									{menu.childMenus.map((childMenu) => (
										<Link
											key={childMenu.href}
											asChild={true}
											className={cn(
												'whitespace-nowrap font-normal duration-100 lg:text-base 2xl:text-lg',
												'rounded-lg p-2 text-secondary hover:bg-primary hover:text-white',
											)}
										>
											<NextLink locale={locale} href={childMenu.href}>
												{locale === 'en' && childMenu.name_en}
												{locale === 'uz' && childMenu.name_uz}
											</NextLink>
										</Link>
									))}
								</Content>
							</Item>
						) : (
							<Item key={menu.href}>
								<Link asChild={true}>
									<NextLink
										locale={locale}
										href={menu.href}
										className={cn(
											'whitespace-nowrap text-secondary hover:text-secondary/90 text-xs font-normal lg:text-base 2xl:text-lg',
										)}
									>
										{locale === 'en' && menu.name_en}
										{locale === 'uz' && menu.name_uz}
									</NextLink>
								</Link>
							</Item>
						),
					)}
					<Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
						<div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
					</Indicator>
				</List>
			</Root>
			{/* Select language */}
			{/* <PopopverRoot aria-label="languages">
        <PopoverTrigger
          className={cn(
            'cursor-defaul h-full bg-white px-4 text-xl text-primary md:cursor-pointer',
          )}
        >
          {locale?.toUpperCase()}
        </PopoverTrigger>
        <Portal>
          <PopoverContent
            sideOffset={5}
            className="z-20 flex flex-col gap-y-2 rounded-xl bg-white p-2 text-base shadow-xl"
          >
            {locales.map((item) => (
              <Close
                className={cn(
                  'flex flex-col gap-y-1 rounded-xl text-center',
                  locale === item
                    ? 'w-full rounded-xl bg-primary-darker p-2 text-white'
                    : 'w-full bg-white p-2 text-primary hover:bg-primary hover:text-white',
                )}
                // onClick={() => changeLang(item)}
                key={item}
              >
                {item.toUpperCase()}
              </Close>
            ))}
          </PopoverContent>
        </Portal>
      </PopopverRoot> */}
			<div className="flex items-center gap-x-8">
				<div className="flex items-center gap-x-24 pb-2 border-b border-black">
					<span>Search</span>
					<Image src={Search} alt="Search Enersok" className="w-4 h-4" />
				</div>
				<span>ENG</span>
				<NextLink
					className="text-lg py-4 px-6 bg-button1 rounded-[100px] text-white"
					href="/contacts"
				>
					Contact us
				</NextLink>
			</div>
		</div>
	);
};

interface DesktopNavigationProps {
	locale: string;
}
