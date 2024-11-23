'use client';

import type { ComponentPropsWithRef, ReactNode, ChangeEvent } from 'react';
import { forwardRef, useRef, useState } from 'react';
import { FieldErrorText } from './FieldErrorText';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import FileImage from '@public/file.svg';

type FileInputRef = HTMLInputElement;
type FileInputProps = ComponentPropsWithRef<'input'> & {
	hasError?: boolean;
	error?: string;
	endIcon?: ReactNode;
	placeholder?: string;
	fileSize?: string;
};

export const FileInput = forwardRef<FileInputRef, FileInputProps>(
	(
		{
			className,
			endIcon,
			hasError,
			error,
			placeholder = 'File',
			fileSize = 'The maximum file size is 3.00mb',
			...props
		},
		ref,
	) => {
		const inputRef = useRef<HTMLInputElement | null>(null);
		const [fileName, setFileName] = useState<string>('');

		const handleClick = () => {
			if (inputRef.current) {
				inputRef.current.click();
			}
		};

		const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
			if (event.target.files && event.target.files.length > 0) {
				setFileName(event.target.files?.[0]?.name ?? '');
			}
		};

		return (
			<div className="relative" onClick={handleClick}>
				<div
					className={cn(
						'block text-[20px] leading-[30px] appearance-none border-b-[1px] border-solid bg-clip-padding outline-none duration-200',
						'border-secondaryOpacity1 bg-white pb-[17px] font-normal text-secondary',
						'placeholder:text-secondary placeholder:duration-200',
						'focus:shadow-input-focus focus:border-primary focus:shadow-primary-100',
						'disabled:border disabled:border-solid disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:hover:cursor-not-allowed',
						'disabled:placeholder:text-gray-400',
						'w-full cursor-pointer',
						{
							'pr-10': endIcon,
						},
						className,
					)}
				>
					{fileName || placeholder}
				</div>
				<input
					type="file"
					className="hidden"
					ref={(node) => {
						inputRef.current = node;
						if (typeof ref === 'function') {
							ref(node);
						} else if (ref) {
							ref.current = node;
						}
					}}
					onChange={handleChange}
					{...props}
				/>
				{endIcon ? (
					<span className="absolute right-0 top-1/2 -translate-y-1/2 text-lg text-gray-400/70">
						{endIcon}
					</span>
				) : (
					<Image
						src={FileImage}
						alt={'File Icon'}
						width={24}
						height={24}
						className="absolute top-1 right-0"
					/>
				)}
				{hasError === true && error ? (
					<FieldErrorText error={hasError}>{error}</FieldErrorText>
				) : null}
				<div className="text-sm text-secondaryOpacity2 mt-3">{fileSize}</div>
			</div>
		);
	},
);

FileInput.displayName = 'FileInput';
