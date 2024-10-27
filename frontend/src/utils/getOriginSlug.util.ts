/**
 * Returns the slug for the 'ru' locale from the given Localizations object.
 * @param locales - The Localizations object containing data for multiple locales.
 * @returns The slug for the 'ru' locale.
 */
export const getOriginSlug = (locales: Localizations) => {
     let slug = '';

     locales.data.forEach((locales) => {
          if (locales.attributes.locale === 'ru') {
               slug += locales.attributes.slug;
          }
     });

     return slug;
};

interface Localizations {
     data: LocalizationsDatum[];
}

interface LocalizationsDatum {
     id: number;
     attributes: FluffyAttributes;
}

interface FluffyAttributes {
     createdAt: Date;
     updatedAt: Date;
     locale: string;
     slug: string;
}