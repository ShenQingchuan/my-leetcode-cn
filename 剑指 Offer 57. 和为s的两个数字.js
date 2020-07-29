/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return []; // 没有找到结果
};
