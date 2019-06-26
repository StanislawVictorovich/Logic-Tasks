/**
 * Formatting from snake to camel case
 */
 
 function toCamelCase($s) {
  return $s.split('')
    .reduce((result, item, i, arr) => 
      item === '-' 
        ? (arr[i+1] = arr[i+1].toUpperCase(), result) 
        : result + item);
}
