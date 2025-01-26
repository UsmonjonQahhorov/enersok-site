import { cn } from '@/utils/cn';
import type { FC } from 'react';
import { Paragraph } from './Paragraph';
import Document from '@public/document.svg';
import Download from '@public/download.svg';
import View from '@public/view.svg';
import Image from 'next/image';
import { BASE_URL } from '@/configs/env.config';
import { Link } from '@/i18n/routing';

export const DownloadFile: FC<DownloadFileProps> = ({
	className,
	text,
	url,
	viewUrl
}) => {
	return (
		<div
			className={cn(
				className,
				'py-[30px] px-4 md:p-8 border-[1px] gap-x-2 border-solid border-secondaryOpacity3 rounded-xl flex justify-between items-center',
			)}
		>
			<div className="w-full flex gap-x-6 md:gap-x-8 justify-start items-center">
				<Image src={Document} alt={'Enersok Document'} />
				<Paragraph className="text-sm break-all md:text-base">{text}</Paragraph>
			</div>
			<div className='flex flex-row gap-1'>
				<Link
					className="p-3 rounded-full bg-download"
					href={viewUrl}
					target="_blank"
				>
					<Image src={View} alt={'Enersok View File'} />
				</Link>
				<Link
					className="p-3 rounded-full bg-download"
					href={`${BASE_URL}${url}`}
					target="_blank"
				>
					<Image src={Download} alt={'Enersok Download File'} />
				</Link>
			</div>
		</div>
	);
};

interface DownloadFileProps {
	className?: string;
	url: string;
	text: string;
	viewUrl: string;
}
