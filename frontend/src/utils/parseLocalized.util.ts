/**
 * Parses a localized value based on the given locale and values.
 * @param locale The locale to use for parsing the value.
 * @param values The localized values to parse.
 * @returns The parsed localized value as a string.
 * @example 
 * {parseLocalizedValue(locale, {
    ru: 'Социальные сети',
    uz: 'Ijtimoiy tarmoqlar',
    en: 'Social links',
    })}
 */
export const parseLocalizedValue = (
     locale: string | undefined,
     values: LocalizedValues,
): string => {
     let result = '';

     if (locale) {
          result = values[locale] || '';
     }

     return result;
};

export type LocalizedValues = Record<string, string>;