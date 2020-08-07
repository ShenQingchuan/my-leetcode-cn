/**
 * @param {any[]} arr
 * @param {number} n
 * @param {number} sum
 * @returns {boolean}
 */
function findGroup(arr, n, sum) {
  if (sum === 0 && n === 0) {
    return true;
  } else if (n <= 0) {
    return false;
  }
  if (n > 0)
    for (let i = 0; i < arr.length; i++) {
      let temp = arr.slice(i + 1, arr.length);
      return findGroup(temp, n - 1, sum - arr[i]) || findGroup(temp, n, sum);
    }
}
