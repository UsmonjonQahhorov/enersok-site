import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ru';
dayjs.extend(customParseFormat);

/**
 * @returns The current time in the specified format.
 * @examples
 * Time('2022-02-02 22:22:22', 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD')
 */
export const Time = dayjs;
