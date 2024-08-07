import type { locales } from '@/configs/i18n.config';
import type { Metadata, ResolvingMetadata } from 'next';
import type { FC, ReactNode } from 'react';

type searchParams = { [key: string]: string | string[] | undefined };
export interface ParamsWithLocale {
	locale: typeof locales[number];
}

export type PageType<
	Params extends ParamsWithLocale = ParamsWithLocale,
	SearchParams = searchParams> = FC<{
		params: Params;
		searchParams?: SearchParams;
	}>

export type LayoutType<
	Params extends ParamsWithLocale = ParamsWithLocale,
> = FC<{
	params: Params;
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
		params: Params;
		searchParams: SearchParams;
	},
	parent: ResolvingMetadata,
) => Promise<Metadata> | Metadata;
