import { cn } from '@/utils/cn';
import type { ComponentPropsWithoutRef, RefObject } from 'react';

export const Map = ({
	ref,
	mapUrl,
	className,
}: MapProps & {
	ref?: RefObject<HTMLIFrameElement>;
}) => {
	return (
		<iframe
			src={mapUrl}
			className={cn('h-[250px] md:h-[400px] lg:h-full w-full rounded-xl', className)}
			title="Enersok position position"
			ref={ref}
			loading="lazy"
		/>
	);
};

Map.displayName = 'Map';
type MapProps = ComponentPropsWithoutRef<'iframe'> & {
	mapUrl: string;
	className?: string;
};
