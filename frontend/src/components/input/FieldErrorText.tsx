import { cn } from '@/utils/cn';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

export const FieldErrorText = forwardRef<
	FieldErrorTextRef,
	FieldErrorTextProps
>(({ error, className, children, ...props }, ref) => {
	if (!error && !children) {
		return null;
	}

	return (
		<div className={'mt-1'}>
			{error && children ? (
				<span
					role="complementary"
					className={cn('text-sm text-red-500', className)}
					{...props}
					ref={ref}
				>
					{children}
				</span>
			) : null}
		</div>
	);
});

FieldErrorText.displayName = 'FieldErrorText';
type FieldErrorTextRef = HTMLSpanElement;
type FieldErrorTextProps = ComponentPropsWithoutRef<'span'> & {
	error?: boolean;
};
