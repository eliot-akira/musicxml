import { t } from '../xml';

/**
 * See the [definition in the W3C XML Schema standard.](https://www.w3.org/TR/xmlschema-2/#date)
 *
 * {@link https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xsd-date/}
 */
export const date = () => {
  return t.custom({
    zero: () => new Date(1970, 0, 1, 0, 0, 0, 0),
    encode: (date: Date) => date.toISOString(),
    decode: (str: string) => new Date(str),
  });
};
