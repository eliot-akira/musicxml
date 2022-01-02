import * as dataTypes from '../dataTypes';
import { t, xml } from '../xml';

/**
 * The `<group-name>` element
 *
 * Parent element: `<part-group>`
 *
 * The `<group-name>` element describes the name of a <part-group> element. The formatting attributes are deprecated as
 * of Version 2.0 in favor of the new `<group-name-display>` element.
 *
 * {@link https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-name/}
 */
export type GroupName = ReturnType<typeof GroupName>;

export const GroupName = xml.element(
  'group-name',
  {
    attributes: {
      /**
       * Indicates the color of an element.
       */
      color: t.optional(dataTypes.color()),

      /**
       * Changes the computation of the default horizontal position. The origin is changed relative to the start of the
       * entire current measure, at either the left barline or the start of the system. Positive x is right and negative
       * x is left.
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
       * Indicates left, center, or right justification. The default value varies for different elements. For elements
       * where the justify attribute is present but the halign attribute is not, the justify attribute indicates
       * horizontal alignment as well as justification.
       */
      justify: t.optional(dataTypes.leftCenterRight()),

      /**
       * Changes the horizontal position relative to the default position, either as computed by the individual program,
       * or as overridden by the default-x attribute. Positive x is right and negative x is left. It should be
       * interpreted in the context of the `<offset>` element or directive attribute if those are present.
       */
      ['relative-x']: t.optional(dataTypes.tenths()),

      /**
       * Changes the vertical position relative to the default position, either as computed by the individual program,
       * or as overridden by the default-y attribute. Positive y is up and negative y is down. It should be interpreted
       * in the context of the placement attribute if that is present.
       */
      ['relative-y']: t.optional(dataTypes.tenths()),
    },
    content: [t.required(dataTypes.string())] as const,
  },
  {}
);
