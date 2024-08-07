import { cn } from '@/utils/cn';
import type { HTMLAttributes } from 'react';

export const Skeleton = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => {
	return <div className={cn('bg-muted animate-pulse', className)} {...props} />;
};
