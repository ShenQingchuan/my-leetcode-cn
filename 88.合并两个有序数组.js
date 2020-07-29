/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m > 0 ? m - 1 : 0,
    p2 = n - 1;
  let p = nums1.length - 1;

  while (p1 >= 0 && p2 >= 0) {
    nums1[p--] = nums2[p2] > nums1[p1] ? nums2[p2--] : nums1[p1--];
  }
};
