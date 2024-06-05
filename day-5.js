/**
 * Multiplies two numbers.
 * @param {number} x - The first number.
 * @param {number} y - The second number.
 * @returns {number} The product of x and y.
 * @example
 * multiply(2, 3); // returns 6
 */
function multiply(x, y) {
  return x * y;
}

//JSDOC

// Write a function to make it uppercase
/**
 *
 * @param {String}  -  the string to be converted to uppercase
 * @returns {string} The string is converted to the upper case
 * @example
 * convertUpperCase(hello); // returns HELLO
 */

function convertoUpperCase(str) {
  let result = str.toUpperCase();
  return result;
}
let str = "hello";
console.log(convertoUpperCase(str));
