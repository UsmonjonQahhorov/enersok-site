import type { Image } from './shared.types';

export interface Sponsor {
	sponsorName: string;
	sponsorValue: string;
	sponsorColor: string;
	sponsorWebsiteLink: string;
	sponsorDescription: string;
	sponsorLogo: Image;
}
