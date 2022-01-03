import * as dataTypes from '../dataTypes';
import { t, xml } from '../xml';

/**
 * The `<group-link>` element
 *
 * Parent element: `<part-link>`
 *
 * Multiple `<part-link>` elements can reference different types of linked documents, such as parts and condensed score.
 * The optional `<group-link>` elements identify the groups used in the linked document. The content of a `<group-link>`
 * element should match the content of a `<group>` element in the linked document.
 *
 * {@link https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-link/}
 */
export type GroupLink = ReturnType<typeof GroupLink>;

export const GroupLink = xml.element(
  'group-link',
  { attributes: {}, content: [t.required(dataTypes.string())] as const },
  {}
);
