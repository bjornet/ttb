/**
 * TODO: Refactor this function to be more readable
 * It should be composable, point-free, and pure.
 * See code below.
 *
 * ```
 * const sanitizerOfSpecialCharacters = (str) =>   str
 *   .normalize("NFD")
 *   .replace(/[\u0300-\u036f]/g, '');
 * ```
 */
export const kebabCase = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\s]/g, '-')
    .replace(/-+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
