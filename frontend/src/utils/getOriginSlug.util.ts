/**
 * Returns the slug for the 'en' locale from the given Localizations object.
 * @param locales - The Localizations object containing data for multiple locales.
 * @returns The slug for the 'en' locale.
 */
export const getOriginSlug = (locales: Localizations) => {
	let slug = '';

	console.log('locales:', locales);

	locales.data?.forEach((locales) => {
		if (locales.attributes.locale === 'en') {
			slug += locales.attributes.slug;
		}
	});

	console.log('slug:', slug);

	return slug;
};

interface Localizations {
	data?: LocalizationsDatum[];
}

interface LocalizationsDatum {
	id: number;
	attributes: FluffyAttributes;
}

interface FluffyAttributes {
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	locale: string;
	slug: string;
	localizations: Localizations;
}
