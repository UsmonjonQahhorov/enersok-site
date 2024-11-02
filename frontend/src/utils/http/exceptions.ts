import type { HttpErrorCode } from '@/types/http.types';

export class FetchError extends Error {
	constructor(
		public code: HttpErrorCode,
		public override message: string,
	) {
		super(message);
	}
}

export class ServerError extends Error {
	constructor(
		public code: number,
		public override message: string,
	) {
		super(message);
	}
}

export class HttpError extends Error {
	constructor(
		public code: HttpErrorCode,
		message: string,
		public description?: string,
	) {
		super(message);
		this.name = 'HttpError';
	}
}

export interface BadRequestErrorField {
	field: string;
	message: string;
}
interface BadRequestErrorOptions {
	description?: string;
	fields?: BadRequestErrorField[];
}
export class BadRequestError extends HttpError {
	fields?: BadRequestErrorField[];

	constructor(message: string, options?: BadRequestErrorOptions) {
		const { description, fields } = options ?? {};
		super(400, message, description);
		this.name = 'BadRequestError';
		this.fields = fields;
	}
}

export class UnauthorizedError extends HttpError {
	constructor(message: string, description?: string) {
		super(401, message, description);
		this.name = 'UnauthorizedError';
	}
}

export class ForbiddenError extends HttpError {
	constructor(message: string, description?: string) {
		super(403, message, description);
		this.name = 'ForbiddenError';
	}
}

export class NotFoundError extends HttpError {
	constructor(message: string, description?: string) {
		super(404, message, description);
		this.name = 'NotFoundError';
	}
}

export class NotAcceptableError extends HttpError {
	constructor(message: string, description?: string) {
		super(406, message, description);
		this.name = 'NotAcceptableError';
	}
}

export class MethodNotAllowedError extends HttpError {
	constructor(message: string, description?: string) {
		super(405, message, description);
		this.name = 'MethodNotAllowedError';
	}
}

export class InternalServerError extends HttpError {
	constructor(message: string, description?: string) {
		super(500, message, description);
		this.name = 'InternalServerError';
	}
}
