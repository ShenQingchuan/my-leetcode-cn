/*
 * @lc app=leetcode.cn id=1237 lang=javascript
 *
 * [1237] 找出给定方程的正整数解
 */

// @lc code=start
/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
    const solutions = []
    let y = 1000

    for (let x = 1; x <= z; x++) {
      while (y) {
        const d = customfunction.f(x, y) - z
        if (d <= 0) {
          if (!d) {
            solutions.push([x, y])
          }
          break;
        }
        y--
      }
    }

    return solutions
};
// @lc code=end

