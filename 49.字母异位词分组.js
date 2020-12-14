/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const aCharCode = "a".charCodeAt(0);
var groupAnagrams = function (strs) {
  let codeSumMap = new Map();
  strs.forEach((str, i) => {
    let counts = Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      counts[str.charCodeAt(i) - aCharCode]++;
    }

    const hashKey = counts.join(",");
    if (!codeSumMap.get(hashKey)) {
      codeSumMap.set(hashKey, [str]);
    } else {
      codeSumMap.get(hashKey).push(str)
    }
  });

  return [...codeSumMap.values()]
};

// local debug: 
console.log(groupAnagrams(
  ["bdddddddddd", "bbbbbbbbbbc"]
));
// @lc code=end

