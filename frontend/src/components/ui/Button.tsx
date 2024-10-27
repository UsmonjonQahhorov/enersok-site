import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/utils/cn';
import type { RefObject } from 'react';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-[100px] text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-button1 text-white hover:bg-button1/90',
				destructive: 'bg-destructive text-destructive hover:bg-destructive/90',
				outline:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary: 'bg-secondary text-secondary hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent',
				link: 'text-white underline-offset-4 hover:underline',
			},
			size: {
				default: 'px-10 py-5 leading-[normal]',
				sm: 'px-4 py-5 leading-[normal]',
				lg: 'px-6 py-5 leading-[normal]',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = (
    {
        ref,
        className,
        variant,
        size,
        asChild = false,
        ...props
    }: ButtonProps & {
        ref?: RefObject<HTMLButtonElement>;
    }
) => {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
        />
    );
};
Button.displayName = 'Button';

export { Button, buttonVariants };
