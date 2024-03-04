// Solution - 1
// Runtime 58ms / 21.26%
// Memory 48.92 MB / 26.25%



// /**
//  * @param {number} num
//  * @return {number}
//  */



var minimumSum = function (num) {
  const arr = num.toString().split('').sort()
  return parseInt(arr[0] + arr[2]) + parseInt(arr[1] + arr[3])
};