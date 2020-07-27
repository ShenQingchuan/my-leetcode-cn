/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits === "") return []

  let alphabetMap = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ]

  let elements = []
  Array.from(digits).forEach(num => {
    elements.push(alphabetMap[num])
  })

  let ret = elements.length > 1 ? elements.reduce((a,b) => {
    if (a.length === 0) return Array.from(b);
    if (b.length === 0) return Array.from(a);
    let res = []
    Array.from(a).forEach(ac => {
      Array.from(b).forEach(bc => {
        res.push(ac+bc)
      })
    })
    return res
  }) : Array.from(elements[0])

  return ret
};
// @lc code=end

