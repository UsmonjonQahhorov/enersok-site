import { Link } from '@/i18n/routing';
import { cn } from '@/utils/cn';
import { getLocale } from '@/utils/getLocale.util';
import type { FC } from 'react';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
	className,
	textHome,
	textPage,
	urlHome,
	urlPage,
}) => {
	const locale = getLocale();

	return (
		<div className={cn(className, 'flex flex-row gap-x-3 items-center')}>
			<Link
				locale={locale}
				className="text-sm leading-[15px] hover:text-primary duration-300"
				href={urlHome}
			>
				{textHome}
			</Link>
			<span className="w-[17px] h-[1px] bg-secondary" />
			<Link
				locale={locale}
				className="text-sm leading-[15px] hover:text-primary duration-300"
				href={urlPage}
			>
				{textPage}
			</Link>
		</div>
	);
};

interface BreadcrumbsProps {
	className?: string;
	urlHome: string;
	urlPage: string;
	textHome: string;
	textPage: string;
}
