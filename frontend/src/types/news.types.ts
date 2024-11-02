import type { Image } from './shared.types';

export interface FullNews {
	previewTitle: string;
	previewTime: string;
	previewDate: string;
	newsDescription: string;
	previewPicture: Image;
	slug: string;
}
