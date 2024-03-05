// Solution - 1
// Runtime 53ms / 42.99%
// Memory 47.87 MB / 75.52%

/**
 * @param {number} num
 * @return {number}
 */


var countDigits = function (num) {
  return num.toString().split('').reduce((acc, curr) => (num % +curr === 0 ? acc + 1 : acc), 0)
};