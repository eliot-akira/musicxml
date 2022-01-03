import * as dataTypes from '../dataTypes';
import { t, xml } from '../xml';

/**
 * The `<elevation>` element
 *
 * Parent element: `<midi-instrument>`
 *
 * The `<elevation>` and `<pan>` elements allow placing of sound in a 3-D space relative to the listener. Both are
 * expressed in degrees ranging from -180 to 180. For `<elevation>`, 0 is level with the listener, 90 is directly above,
 * and -90 is directly below.
 *
 * {@link https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/elevation/}
 */
export type Elevation = ReturnType<typeof Elevation>;

export const Elevation = xml.element(
  'elevation',
  { attributes: {}, content: [t.required(dataTypes.rotationDegrees())] as const },
  {}
);
