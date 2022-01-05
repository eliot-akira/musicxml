import * as dataTypes from '../dataTypes';
import { t, xml } from '../xml';

/**
 * The `<fingering>` element
 *
 * Parent elements: `<frame-note>`, `<technical>`
 *
 * Fingering is typically indicated 1,2,3,4,5. Multiple fingerings may be given, typically to substitute fingerings in
 * the middle of a note. For guitar and other fretted instruments, the `<fingering>` element represents the fretting
 * finger; the `<pluck>` element represents the plucking finger.
 *
 * {@link https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fingering/}
 */
export type Fingering = ReturnType<typeof Fingering>;

export const Fingering = xml.element(
  'fingering',
  {
    attributes: {
      /**
       * Indicates that this is an alternate fingering. It is no if not present.
       */
      alternate: t.optional(dataTypes.yesNo()),

      /**
       * Indicates the color of an element.
       */
      color: t.optional(dataTypes.color()),

      /**
       * Changes the computation of the default horizontal position. If the parent is a `<notehead-text>` element, the
       * origin is changed relative to the left-hand side of the note or the musical position within the bar. Otherwise,
       * the origin is changed relative to the start of the first measure on the system, and these values are used when
       * the current measure or a succeeding measure starts a new system. Positive x is right and negative x is left.
       */
      ['default-x']: t.optional(dataTypes.tenths()),

      /**
       * Changes the computation of the default vertical position. The origin is changed relative to the top line of the
       * staff. Positive y is up and negative y is down.
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
       * Indicates whether something is above or below another element, such as a note or a notation.
       */
      placement: t.optional(dataTypes.aboveBelow()),

      /**
       * Changes the horizontal position relative to the default position, either as computed by the individual program,
       * or as overridden by the default-x attribute. Positive x is right and negative x is left.
       */
      ['relative-x']: t.optional(dataTypes.tenths()),

      /**
       * Changes the vertical position relative to the default position, either as computed by the individual program,
       * or as overridden by the default-y attribute. Positive y is up and negative y is down.
       */
      ['relative-y']: t.optional(dataTypes.tenths()),

      /**
       * Indicates that this fingering is a substitution in the middle of a note. It is no if not present.
       */
      substitution: t.optional(dataTypes.yesNo()),
    },
    content: [] as const,
  },
  {}
);
