/**
 * Converts kebab-case and snake_case into camelCase
 *
 * @name camel
 * @param {string} s String to convert
 * @returns {string} camelCase formatted string
 */
export default s => s.replace(/[-_][a-z\u00E0-\u00F6\u00F8-\u00FE]/g, match => match.slice(1).toUpperCase())
