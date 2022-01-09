import * as dataTypes from '../dataTypes';
import { t, xml } from '../xml';
import { Beater } from './Beater';
import { Effect } from './Effect';
import { Glass } from './Glass';
import { Membrane } from './Membrane';
import { Metal } from './Metal';
import { OtherPercussion } from './OtherPercussion';
import { Pitched } from './Pitched';
import { Stick } from './Stick';
import { StickLocation } from './StickLocation';
import { Timpani } from './Timpani';
import { Wood } from './Wood';

/**
 * The `<percussion>` element
 *
 * Parent element: `<direction-type>`
 *
 * The `<percussion>` element is used to define percussion pictogram symbols. The organization of these symbols follows
 * the definitions in Kurt Stone's "Music Notation in the Twentieth Century" on pages 206-212 and 223. More pictograms
 * have been added to the ones listed in Stone, based on how usage has evolved since the book was published in 1980.
 *
 * {@link https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/percussion/}
 */
export type Percussion = ReturnType<typeof Percussion>;

export const Percussion = xml.element(
  'percussion',
  {
    attributes: {
      /**
       * Indicates the color of an element.
       */
      color: t.optional(dataTypes.color()),

      /**
       * 	Changes the computation of the default horizontal position. The origin is changed relative to the left-hand
       * side of the note or the musical position within the bar. Positive x is right and negative x is left.
       *
       * This attribute provides higher-resolution positioning data than the `<offset>` element. Applications reading a
       * MusicXML file that can understand both features should generally rely on this attribute for its greater
       * accuracy.
       */
      ['default-x']: t.optional(dataTypes.tenths()),

      /**
       * Changes the computation of the default vertical position. The origin is changed relative to the top line of the
       * staff. Positive y is up and negative y is down.
       *
       * This attribute provides higher-resolution positioning data than the placement attribute. Applications reading a
       * MusicXML file that can understand both attributes should generally rely on this attribute for its greater
       * accuracy.
       */
      ['default-y']: t.optional(dataTypes.tenths()),

      /**
       * A comma-separated list of font names.
       */
      ['font-family']: t.optional(dataTypes.fontFamily()),

      /**
       * One of the CSS sizes or a numeric point size.
       */
      ['font-size']: t.optional(dataTypes.fontSize()),

      /**
       * Normal or italic style.
       */
      ['font-style']: t.optional(dataTypes.fontStyle()),

      /**
       * Normal or bold weight.
       */
      ['font-weight']: t.optional(dataTypes.fontWeight()),

      /**
       * In cases where text extends over more than one line, horizontal alignment and justify values can be different.
       * The most typical case is for credits, such as:
       *
       * Words and music by
       *   Pat Songwriter
       *
       * Typically this type of credit is aligned to the right, so that the position information refers to the
       * right-most part of the text. But in this example, the text is center-justified, not right-justified.
       *
       * The halign attribute is used in these situations. If it is not present, its value is the same as for the
       * justify attribute. For elements where a justify attribute is not allowed, the default is
       * implementation-dependent.
       */
      halign: t.optional(dataTypes.leftCenterRight()),

      /**
       * Specifies an ID that is unique to the entire document.
       */
      id: t.optional(dataTypes.id()),

      /**
       * Changes the horizontal position relative to the default position, either as computed by the individual
       * program, or as overridden by the default-x attribute. Positive x is right and negative x is left. It should be
       * interpreted in the context of the <offset> element or directive attribute if those are present.
       */
      ['relative-x']: t.optional(dataTypes.tenths()),

      /**
       * Changes the horizontal position relative to the default position, either as computed by the individual
       * program, or as overridden by the default-x attribute. Positive x is right and negative x is left. It should be
       * interpreted in the context of the <offset> element or directive attribute if those are present.
       */
      ['relative-y']: t.optional(dataTypes.tenths()),

      /**
       * Indicates vertical alignment to the top, middle, bottom, or baseline of the text. The default is
       * implementation-dependent.
       */
      valign: t.optional(dataTypes.valign()),
    },
    content: [
      t.choices(Glass, Metal, Wood, Pitched, Membrane, Effect, Timpani, Beater, Stick, StickLocation, OtherPercussion),
    ] as const,
  },
  {}
);
