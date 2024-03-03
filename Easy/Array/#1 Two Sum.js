// Solution - 1
// Runtime 132ms / 15.99%
// Memory 49.26 MB / 61.98%



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let indexes = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return indexes;
};