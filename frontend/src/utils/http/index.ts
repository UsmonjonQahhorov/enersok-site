import { BASE_URL, ENV_MODE, TOKEN } from '@/configs/env.config';
import type { BadRequestErrorField } from './exceptions';
import { HttpError, BadRequestError, FetchError } from './exceptions';
import type { HttpCode } from '@/types/http.types';
import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { NextResponse, type NextRequest } from 'next/server';

export type HttpUrl = RequestInfo | URL;
export type HttpOptions =
	| (RequestInit & {
		method?: 'POST' | 'GET' | 'PATCH' | 'DELETE' | 'PUT';
		isAuth?: boolean;
		isJson?: boolean;
		cookies?: ReadonlyRequestCookies;
	})
	| undefined;
export type HttpResult<ResponseT, ErrorT> =
	| {
		ok: true;
		data: ResponseT;
		error: null;
		code: number;
	}
	| {
		ok: false;
		data: null;
		error: ErrorT;
		code: number;
	};
/**
 * Makes an HTTP request to the specified URL with the given options.
 * @param url The URL to send the request to.
 * @param options The options to use for the request.
 * @returns A promise that resolves to an object containing the response data, error data (if any), and HTTP status code.
 */
export const http = async <ResponseType = unknown, ErrorType = unknown>(
	url: HttpUrl,
	options?: HttpOptions,
): Promise<HttpResult<ResponseType, ErrorType>> => {
	const requestUrl = `${BASE_URL}/api${url}`;

	try {
		const requestOptions = getRequestOptions(options);

		// ==== Sending request ==== //
		const response = await fetch(requestUrl, requestOptions);

		// ==== Parsing response ==== //
		const responseOk = response.ok;
		const responseStatus = response.status;

		// ==== Check if response is ok ==== //
		if (responseOk === false) {
			const isValidJson = await isJson(response);
			const errorData = await getErrorData({ isJson: isValidJson, response });
			throw new FetchError(responseStatus, errorData);
		}

		// ==== Parsing response data ==== //
		const responseData = (await response.json()) as ResponseType;

		// ==== Return response ==== //
		return {
			ok: true,
			data: responseData,
			error: null,
			code: responseStatus,
		};
	} catch (error) {
		if (ENV_MODE === 'development') {
			console.error(error);
		}

		if (error instanceof FetchError) {
			const isJson = isJsonError(error.message);
			const errorInfo = isJson ? JSON.parse(error.message) : `${error.message}`;

			return {
				ok: false,
				data: null,
				error: errorInfo as ErrorType,
				code: error.code,
			};
		}

		return {
			ok: false,
			data: null,
			code: 500,
			error:
				`Произошла неизвестная ошибка при запросе к серверу. URL: ${requestUrl}. Ошибка: ${error}` as ErrorType,
		};
	}
};
function getRequestOptions(options: HttpOptions) {
	let optionsObject: RequestInit = {};
	const isJson = options?.isJson ?? true;

	if (isJson) {
		if (options) {
			const { headers: headerOptions, ...otherOptions } = options;

			optionsObject = {
				headers: {
					...headerOptions,
					'Content-Type': 'application/json',
					Authorization: `Bearer ${TOKEN}`,
				},
				...otherOptions,
			};
		} else {
			optionsObject = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${TOKEN}`,
				},
			};
		}
	} else {
		optionsObject = {
			...options,
		};
	}

	return optionsObject;
}
async function isJson(data: Response) {
	try {
		JSON.parse(await data.clone().text());
		return true;
	} catch {
		return false;
	}
}
async function getErrorData({
	isJson,
	response,
}: {
	response: Response;
	isJson: boolean;
}) {
	let errorData: string;

	if (isJson) {
		const responseJson = await response.json();

		errorData = JSON.stringify(responseJson);
	} else {
		errorData = await response.text();
	}

	return errorData;
}
function isJsonError(errorData: string) {
	let value =
		typeof errorData !== 'string' ? JSON.stringify(errorData) : errorData;

	try {
		value = JSON.parse(value) as string;
	} catch (_e) {
		return false;
	}

	return typeof value === 'object' && value !== null;
}

type CallbackHandlerDefaultParams = object;
export type CallbackHandler<
	Body = unknown,
	Params extends CallbackHandlerDefaultParams = CallbackHandlerDefaultParams,
> = (
	req: NextRequest,
	dynamicSegment: CallbackHandlerDynamicSegment<Params>,
) => CallbackHandlerResponse<Body> | Promise<CallbackHandlerResponse<Body>>;
interface CallbackHandlerResponse<Body = unknown> {
	status: HttpCode;
	body: Body;
	options?: {
		headers?: HeadersInit | undefined;
		nextConfig?: {
			basePath?: string;
			i18n?: {
				defaultLocale: string;
				domains?: {
					defaultLocale: string;
					domain: string;
					http?: true;
					locales?: string[];
				}[];
				localeDetection?: false;
				locales: string[];
			};
			trailingSlash?: boolean;
		};
		statusText?: string | undefined;
		url?: string | undefined;
	};
}
interface CallbackHandlerDynamicSegment<
	Params extends CallbackHandlerDefaultParams = CallbackHandlerDefaultParams,
> {
	params: Params;
}
export const routeHandler = <
	T = unknown,
	K extends CallbackHandlerDefaultParams = CallbackHandlerDefaultParams,
>(
	handler: CallbackHandler<T, K>,
) => {
	return async (
		req: NextRequest,
		dynamicSegment: CallbackHandlerDynamicSegment<K>,
	) => {
		try {
			const { status, body, options } = await handler(req, dynamicSegment);

			return NextResponse.json(body, {
				status,
				...options,
			});
		} catch (error) {
			if (ENV_MODE === 'development') {
				console.error(error);
			}

			const errorCode = getErrorCode(error);
			const errorMessage = getErrorMessage(error);
			const errorDescription = getErrorDescription(error);
			const badRequestFields = getBadRequestFields(error);

			const errorBody = tidyErrorBody({
				code: errorCode,
				message: errorMessage,
				error: errorDescription,
				fields: badRequestFields,
			});

			return NextResponse.json(errorBody, {
				status: errorCode,
			});
		}
	};
};

function getErrorCode(error: unknown) {
	let errorCode = 500;

	if (error instanceof HttpError) {
		errorCode = error.code ?? 500;
	}

	return errorCode;
}

function getErrorMessage(error: unknown) {
	let errorMessage = 'Error';

	if (error instanceof Error) {
		errorMessage = error.message ?? 'Internal Server Error';
	}

	return errorMessage;
}

function getErrorDescription(error: unknown) {
	let errorDescription: string | undefined =
		"Some internal error occurred that wasn't handled by the server properly.";

	if (error instanceof HttpError) {
		errorDescription = error.description;
	}

	return errorDescription;
}

function getBadRequestFields(error: unknown) {
	let badRequestFields: BadRequestErrorField[] | undefined;

	if (error instanceof BadRequestError) {
		badRequestFields = error.fields;
	}

	return badRequestFields;
}

function tidyErrorBody<T extends Record<string, unknown>>(body: T) {
	for (const key in body) {
		if (body[key] === undefined || body[key] === null) {
			delete body[key];
		}
	}

	return body;
}
