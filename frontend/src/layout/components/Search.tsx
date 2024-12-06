'use client';

import { search } from '@/api/search/search.api';
import { InputBase } from '@/components/input/InputBase';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { RouterConfig } from '@/configs/router.config';
import { Link } from '@/i18n/routing';
import { getLocale } from '@/utils/getLocale.util';
import { Time } from '@/utils/time';
import Search from '@public/search.svg';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useDebounce } from '@uidotdev/usehooks';
import { BriefcaseBusiness, Calendar, FileText, Newspaper } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useState, type ChangeEvent } from 'react';

export const SearchContent = () => {
	const queryClient = useQueryClient();
	const locale = getLocale();
	const searchText = locale === 'en' ? 'Search' : 'Qidirish';
	const moreText = locale === 'en' ? 'More' : "Ko'proq";
	const [searchQuery, setSearchQuery] = useState<string>('');
	const debouncedSearchTerm = useDebounce(searchQuery, 300);

	const { data, status, isLoading } = useQuery({
		queryKey: ['search', debouncedSearchTerm],
		queryFn: async ({ signal }) => {
			if (debouncedSearchTerm.length > 0) {
				return await search(debouncedSearchTerm, locale, signal);
			}
			return { data: null };
		},
		enabled: searchQuery.length > 0,
		staleTime: 0, // Don't cache results
		gcTime: 0, // Immediately garbage collect
		retry: false,
		retryOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

	const handleSearchChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setSearchQuery(e.target.value);
			queryClient.cancelQueries({ queryKey: ['search', searchQuery] });
		},
		[queryClient, searchQuery],
	);

	const hasData =
		(data?.data?.new?.length ?? 0) > 0 ||
		(data?.data?.vacancies?.length ?? 0) > 0 ||
		(data?.data?.['documents-and-guidlines']?.length ?? 0) > 0;

	return (
		<div className="relative flex items-center justify-center">
			<search>
				<form>
					<InputBase
						value={searchQuery}
						className="bg-transparent pb-0 max-w-[200px] text-xs font-normal xl:text-sm 2xl:text-lg"
						placeholder={searchText}
						endIcon={
							<Image src={Search} alt="Search Enersok" className="w-4 h-4" />
						}
						onChange={handleSearchChange}
					/>
				</form>
			</search>
			{isLoading && (
				<ul className="absolute top-14 -left-[70%] bg-white border border-gray-200 rounded-lg shadow-md p-5 gap-5 flex flex-col max-h-[300px] overflow-hidden overflow-y-auto w-[500px]">
					<li className="p-4 border border-gray-200 rounded-lg shadow-md list-none animate-pulse min-h-[150px] bg-slate-300" />
				</ul>
			)}
			{status === 'success' && hasData && (
				<ul className="absolute top-14 -left-[70%] bg-white border border-gray-200 rounded-lg shadow-md p-5 gap-5 flex flex-col max-h-[300px] overflow-hidden overflow-y-auto w-[600px]">
					{/*  News */}
					{data.data?.new?.map((news) => (
						<li
							key={news.id}
							className="p-4 bg-white border border-gray-200 rounded-lg shadow-md list-none"
						>
							<div className="flex flex-col gap-3">
								<div className="flex gap-1">
									<Calendar size={20} />
									<span>{Time(news.preview_date).format('DD.MM.YYYY')}</span>
								</div>
								<div className="flex gap-1 items-center">
									<Newspaper size={20} />
									<Heading as="h4" weight="black" size="sm">
										{news.preview_title}
									</Heading>
								</div>
								<Paragraph className="text-sm line-clamp-2">
									{news.news_description
										? news.news_description
										: news.news_description_full}
								</Paragraph>
								{/* More Button */}
								<Link
									href={RouterConfig.SingleNew(news.slug)}
									className="text-white w-fit text-sm py-2 px-7 bg-button1 hover:bg-button1/80 duration-200 rounded-full"
									onClick={() => setSearchQuery('')}
								>
									{moreText}
								</Link>
							</div>
						</li>
					))}
					{/* Vacancies */}
					{data.data?.vacancies?.map((vacancy) => (
						<li
							key={vacancy.id}
							className="p-4 bg-white border border-gray-200 rounded-lg shadow-md list-none"
						>
							<div className="flex flex-col gap-3">
								<div className="flex gap-2">
									<Calendar size={20} />
									<span>{Time(vacancy.publishedAt).format('DD.MM.YYYY')}</span>
								</div>

								<div className="flex gap-2">
									<BriefcaseBusiness size={20} />
									<Heading as="h4" weight="black" size="sm">
										{vacancy.vacancy_name}
									</Heading>
								</div>
								<Paragraph className="text-sm line-clamp-2">
									{vacancy.vacancy_description}
								</Paragraph>
								{/* More Button */}
								<Link
									href={RouterConfig.SingleCareer(vacancy.slug)}
									className="text-white w-fit text-sm py-2 px-7 bg-button1 hover:bg-button1/80 duration-200 rounded-full"
									onClick={() => setSearchQuery('')}
								>
									{moreText}
								</Link>
							</div>
						</li>
					))}
					{/* Documents and Guidelines */}
					{data.data?.['documents-and-guidlines']?.map((document) => (
						<li
							key={document.id}
							className="p-4 bg-white border border-gray-200 rounded-lg shadow-md list-none"
						>
							<div className="flex flex-col gap-3">
								<div className="flex gap-2">
									<Calendar size={20} />
									<span>{Time(document.createdAt).format('DD.MM.YYYY')}</span>
								</div>
								<div className="flex gap-2">
									<FileText size={20} />
									<Heading as="h4" weight="black" size="sm">
										{document.document_name}
									</Heading>
								</div>
								<Link
									href={RouterConfig.DocumentsAndGuidelines}
									className="text-white w-fit text-sm py-2 px-7 bg-button1 hover:bg-button1/80 duration-200 rounded-full"
									onClick={() => setSearchQuery('')}
								>
									{moreText}
								</Link>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
