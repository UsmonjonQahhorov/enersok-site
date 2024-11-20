import Image from 'next/image';
import type { FC } from 'react';
// import Logo from '@public/logo.png';
import { getHeader } from '@/api/layout/getHeader.api';
import { Container } from '@/components/ui/Container';
import { Link } from '@/i18n/routing';
import { cn } from '@/utils/cn';
import { getBackendImage } from '@/utils/getBackendImage';
import { DesktopNavigation, MobileNavigation } from './components';

export const Header: FC<HeaderProps> = async ({ className }) => {

	const headerData = await getHeader();

	return (
		<header
			className={cn(className, 'py-3 sm:py-6 xl:py-12 absolute top-0 left-0 w-full z-[40]')}
		>
			<Container className="flex justify-between items-center">
				<Link href={'/'}>
					<Image
						src={getBackendImage(headerData.data?.data.attributes.logo.data.attributes.formats.thumbnail.url)}
						width={headerData.data?.data.attributes.logo.data.attributes.width}
						height={headerData.data?.data.attributes.logo.data.attributes.height}
						alt="Enersok Logo"
						priority={true}
						className="w-[159px] sm:w-[205px] h-fit"
					/>
				</Link>
				<DesktopNavigation />
				<MobileNavigation />
			</Container>
		</header>
	);
};

interface HeaderProps {
	className?: string;
	locale: string;
}
