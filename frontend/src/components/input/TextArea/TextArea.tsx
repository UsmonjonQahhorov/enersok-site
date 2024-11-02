import type {
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	ReactNode,
} from 'react';
import { forwardRef } from 'react';
import { FieldGroup } from '@/components/input/FieldGroup';
import { LabelBase } from '@/components/input/LabelBase';
import { cn } from '@/utils/cn';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{
			children,
			className,
			required,
			id,
			label,
			labelProps,
			fieldGroupProps,
			...props
		},
		ref,
	) => {
		const { className: labelClassname, ...otherLabelProps } = labelProps ?? {};

		return (
			<FieldGroup {...fieldGroupProps}>
				{label && (
					<LabelBase
						required={required}
						className={cn(labelClassname)}
						htmlFor={id}
						{...otherLabelProps}
					>
						{label}
					</LabelBase>
				)}
				<textarea
					className={cn(
						'block text-[20px] leading-[30px] appearance-none border-b-[1px] border-solid bg-clip-padding outline-none duration-200',
						'border-secondaryOpacity1 bg-white pb-[21px] font-normal text-secondary',
						'placeholder:text-secondary placeholder:duration-200',
						'focus:shadow-input-focus focus:border-primary focus:shadow-primary-100',
						'disabled:border disabled:border-solid disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:hover:cursor-not-allowed',
						'disabled:placeholder:text-gray-400',
						className,
					)}
					{...props}
					ref={ref}
				>
					{children}
				</textarea>
			</FieldGroup>
		);
	},
);

type TextareaProps = ComponentPropsWithRef<'textarea'> & {
	label?: ReactNode;
	labelProps?: Omit<ComponentPropsWithoutRef<typeof LabelBase>, 'required'>;
	type?: 'text' | 'password';
	fieldGroupProps?: ComponentPropsWithoutRef<typeof FieldGroup>;
};

Textarea.displayName = 'Textarea';
