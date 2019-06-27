/**
 * Formatting from snake to camel case
 */
 
function toCamelCase($s) {
  return $s.split('-').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('');
}

// the way of using reduce
/* function toCamelCase($s) {
  return $s.split('')
    .reduce((result, item, i, arr) => 
      item === '-' 
        ? (arr[i+1] = arr[i+1].toUpperCase(), result) 
        : result + item);
} */
