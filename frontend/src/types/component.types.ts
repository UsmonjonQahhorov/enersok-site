import type { locales } from '@/configs/i18n.config';
import type { Metadata, ResolvingMetadata } from 'next';
import type { FC, ReactNode } from 'react';

type searchParams = { [key: string]: string | string[] | undefined };
export interface ParamsWithLocale {
	locale: (typeof locales)[number];
	slug?: string;
}

export type PageType<
	Params extends ParamsWithLocale = ParamsWithLocale,
	SearchParams = searchParams,
> = FC<{
	params: Promise<Params>;
	searchParams?: Promise<SearchParams>;
}>;

export type LayoutType<Params extends ParamsWithLocale = ParamsWithLocale> =
	FC<{
		params: Promise<Params>;
		children: ReactNode;
	}>;

export type ErrorRouteComponent = FC<{
	error: Error;
	reset: () => void;
}>;

export type RenderBehavior =
	| 'auto'
	| 'force-dynamic'
	| 'error'
	| 'force-static';

export type DynamicMetadata<
	Params extends ParamsWithLocale = ParamsWithLocale,
	SearchParams extends object = object,
> = (
	params: {
		params: Promise<Params>;
		searchParams: Promise<SearchParams>;
	},
	parent: ResolvingMetadata
) => Promise<Metadata> | Metadata;