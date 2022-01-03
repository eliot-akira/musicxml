import * as dataTypes from '../dataTypes';
import { t, xml } from '../xml';

/**
 * The `<instrument-link>` element
 *
 * Parent element: `<part-link>`
 *
 * Multiple `<part-link>` elements can link a condensed part within a score file to multiple MusicXML parts files. For
 * example, a "Clarinet 1 and 2" part in a score file could link to separate "Clarinet 1" and "Clarinet 2" part files.
 * The `<instrument-link>` element distinguishes which of the `<score-instrument>`s within a `<score-part>` are in which part file.
 *
 * {@link https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-link/}
 */
export type InstrumentLink = ReturnType<typeof InstrumentLink>;

export const InstrumentLink = xml.element(
  'instrument-link',
  {
    attributes: {
      /**
       * Refers to a `<score-instrument>` id attribute.
       */
      id: t.required(dataTypes.idref()),
    },
    content: [] as const,
  },
  {}
);
