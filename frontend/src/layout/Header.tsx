import Image from 'next/image';
import type { FC } from 'react';
import Logo from '@public/logo.png';
import { Container } from '@/components/ui/Container';
import { DesktopNavigation, MobileNavigation } from './components';
import { cn } from '@/utils/cn';
import { Link } from '@/i18n/routing';

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<header
			className={cn(className, 'py-12 absolute top-0 left-0 w-full z-[40]')}
		>
			<Container className="flex justify-between items-center">
				<Link href={'/'}>
					<Image
						src={Logo}
						alt="Enersok Header Logo"
						priority={true}
						className="w-[205px] h-fit"
					/>
				</Link>
				<DesktopNavigation />
				<MobileNavigation  />
			</Container>
		</header>
	);
};

interface HeaderProps {
	className?: string;
	locale: string;
}
