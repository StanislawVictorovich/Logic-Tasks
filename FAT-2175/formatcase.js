/**
 * Formatting from snake to camel case
 */
 
function toCamelCase($s) {
  return $s.split('-').map(str => str = str[0].toUpperCase() + str.slice(1)).join('');
}
