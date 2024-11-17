import { cn } from '@/utils/cn';
import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';

export const LabelBase = forwardRef<HTMLLabelElement, LabelBaseProps>(
	(
		{
			className,
			children,
			required,
			astericsClassname,
			variant = 'primary',
			...props
		},
		ref,
	) => {
		return (
			<label
				ref={ref}
				className={cn(
					'inline-block text-[15px] text-stone-900',
					{
						'mb-2 font-medium ': variant === 'primary',
						'mb-0 font-normal ': variant === 'secondary',
					},
					className,
				)}
				{...props}
			>
				{children}
				{required === true && (
					<span className={cn('text-red-600', astericsClassname)}>*</span>
				)}
			</label>
		);
	},
);

LabelBase.displayName = 'LabelBase';

type LabelBaseProps = ComponentPropsWithRef<'label'> & {
	required?: boolean;
	astericsClassname?: string;
	variant?: 'primary' | 'secondary';
};
