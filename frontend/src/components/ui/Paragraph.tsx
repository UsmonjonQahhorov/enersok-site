import { cn } from '@/utils/cn';
import type { HTMLAttributes } from 'react';

export const Paragraph = ({
	weight = 'normal',
	size = 'base',
	children,
	className,
	...props
}: ParagraphProps) => {
	return (
		<p
			className={cn(
				{
					'text-xs': size === 'xs',
					'text-sm': size === 'sm',
					'text-base': size === 'base',
					'text-lg': size === 'lg',
					'text-xl': size === 'xl',
					'text-2xl': size === '2xl',
					'text-3xl': size === '3xl',
					'text-4xl': size === '4xl',
					'text-5xl': size === '5xl',
				},
				{
					'font-thin': weight === 'thin',
					'font-extralight': weight === 'extralight',
					'font-light': weight === 'light',
					'font-normal': weight === 'normal',
					'font-medium': weight === 'medium',
					'font-semibold': weight === 'semibold',
					'font-bold': weight === 'bold',
					'font-extrabold': weight === 'extrabold',
					'font-black': weight === 'black',
				},
				className,
			)}
			{...props}
		>
			{children}
		</p>
	);
};

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
	size?: TextSize;
	weight?: TextWeight;
}

type TextSize =
	| 'xs'
	| 'sm'
	| 'base'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl';
type TextWeight =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black';
