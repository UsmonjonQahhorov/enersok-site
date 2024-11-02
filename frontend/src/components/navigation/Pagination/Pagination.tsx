'use client';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { Pagination as HeadlessPagination } from 'react-headless-pagination';
import Arrow from './../../../../public/arrow-left-line.svg';

export const Pagination = ({
	ref,
	page,
	total,
	disabled = false,
	onPaginate,
	position = 'center',
}: PaginationProps & {
	ref: React.RefObject<PaginationRef>;
}) => {
	if (total <= 1) {
		return null;
	}

	function onPageChange(libPage: number) {
		if (disabled) {
			return null;
		}

		const pressedPage = libPage + 1;
		if (pressedPage === page) {
			return null;
		}

		onPaginate(pressedPage);
	}

	const paginationStyles = {
		container: 'flex items-center list-none gap-x-9',
		containerCenter: 'justify-center',
		containerLeft: 'justify-start',
		containerRight: 'justify-end',
		page: 'group-first:bg-red-300 inline-block py-2 text-2xl text-secondary',
		inactivePage: 'cursor-pointer text-secondary',
		activePage: 'cursor-default border-secondary text-button1',
		truncated:
			'px-3 bg-transparent border-none hover:bg-transparent cursor-default',
		nextButton: 'bg-button1 rounded-full p-6',
	};

	function onNextPage() {
		if (page < total && !disabled) {
			onPaginate(page + 1);
		}
	}

	return (
		<div ref={ref}>
			<HeadlessPagination
				className={cn(paginationStyles.container, {
					[paginationStyles.containerCenter]: position === 'center',
					[paginationStyles.containerLeft]: position === 'left',
					[paginationStyles.containerRight]: position === 'right',
				})}
				currentPage={page - 1}
				edgePageCount={2}
				middlePagesSiblingCount={2}
				totalPages={total}
				setCurrentPage={onPageChange}
				truncableClassName={cn(
					paginationStyles.page,
					paginationStyles.truncated,
				)}
			>
				<HeadlessPagination.PageButton
					as={<button type="button" role="link" />}
					activeClassName={paginationStyles.activePage}
					inactiveClassName={paginationStyles.inactivePage}
					className={paginationStyles.page}
				/>
				<button
					type="button"
					onClick={onNextPage}
					className={paginationStyles.nextButton}
				>
					<Image src={Arrow} alt="Pagination Button" className="w-6 h-6" />
				</button>
			</HeadlessPagination>
		</div>
	);
};

type PaginationRef = HTMLDivElement;
interface PaginationProps {
	page: number;
	total: number;
	onPaginate: (page: number) => void;
	disabled?: boolean;
	position?: 'left' | 'center' | 'right';
}

Pagination.displayName = 'Pagination';
