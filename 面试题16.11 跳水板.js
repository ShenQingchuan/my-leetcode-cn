/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (k === 0) return [];
  if (shorter === longer) return [shorter * k];

  let r = new Array(k);
  for (let i = 0; i <= k; i++) {
    r[i] = shorter * (k - i) + longer * i;
  }
  return r;
};
