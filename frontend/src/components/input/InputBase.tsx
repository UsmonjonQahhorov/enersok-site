import type { ComponentPropsWithRef, ReactNode } from 'react';
import { forwardRef, Fragment } from 'react';
import { FieldErrorText } from './FieldErrorText';
import { cn } from '@/utils/cn';

type InputBaseRef = HTMLInputElement;
type InputBaseProps = ComponentPropsWithRef<'input'> & {
	hasError?: boolean;
	error?: string;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
};

export const InputBase = forwardRef<InputBaseRef, InputBaseProps>(
	({ className, startIcon, endIcon, hasError, error, ...props }, ref) => {
		const hasAdornment = startIcon ?? endIcon;

		return hasAdornment === false ? (
			<Fragment>
				<input
					className={cn(
						'block text-[20px] leading-[30px] appearance-none border-b-[1px] border-solid bg-clip-padding outline-none duration-200',
						'border-secondaryOpacity1 bg-white pb-[17px] font-normal text-secondary',
						'placeholder:text-secondary placeholder:duration-200',
						'focus:shadow-input-focus focus:border-primary focus:shadow-primary-100',
						'disabled:border disabled:border-solid disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:hover:cursor-not-allowed',
						'disabled:placeholder:text-gray-400',
						className,
					)}
					ref={ref}
					{...props}
				/>
				{hasError === true && error ? (
					<FieldErrorText>{error}</FieldErrorText>
				) : null}
			</Fragment>
		) : (
			<div className="relative">
				{startIcon ? (
					<span className="absolute left-3 top-1/2 -translate-y-1/2">
						{startIcon}
					</span>
				) : null}
				<input
					className={cn(
						'block text-[20px] leading-[30px] appearance-none border-b-[1px] border-solid bg-clip-padding outline-none duration-200',
						'border-secondaryOpacity1 bg-white pb-[17px] font-normal text-secondary',
						'placeholder:text-secondary placeholder:duration-200',
						'focus:shadow-input-focus focus:border-primary focus:shadow-primary-100',
						'disabled:border disabled:border-solid disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:hover:cursor-not-allowed',
						'disabled:placeholder:text-gray-400',
						'w-full',
						{
							'pl-10': startIcon,
							'pr-10': endIcon,
						},
						className,
					)}
					ref={ref}
					{...props}
				/>
				{hasError === true && error ? (
					<FieldErrorText error={hasError}>{error}</FieldErrorText>
				) : null}
				{endIcon ? (
					<span className="absolute right-0 top-1/2 -translate-y-1/2 text-lg text-gray-400/70">
						{endIcon}
					</span>
				) : null}
			</div>
		);
	},
);

InputBase.displayName = 'InputBase';
