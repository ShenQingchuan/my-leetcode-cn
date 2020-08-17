/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (72.96%)
 * Likes:    715
 * Dislikes: 0
 * Total Accepted:    69.3K
 * Total Submissions: 94.8K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 *
 * 例如，给出 n = 3，生成结果为：
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  /**
   * @param {Array<string>} result
   * @param {number} numOfL
   * @param {number} numOfR
   * @param {string} r
   */
  const innerRecursive = (result, numOfL, numOfR, r) => {
    // Base Condition:
    if (numOfL === n && numOfR === n) {
      result.push(r);
      return;
    }

    if (numOfL < n) {
      // 左括号还不够，继续增加括号
      innerRecursive(result, numOfL + 1, numOfR, r + "(");
    }
    if (numOfL > numOfR) {
      // 右括号不够，添加右括号
      innerRecursive(result, numOfL, numOfR + 1, r + ")");
    }
  };

  innerRecursive(result, 0, 0, "");
  return result;
};
// @lc code=end

console.log(generateParenthesis(4));
