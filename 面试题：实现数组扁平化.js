/**
 * 数组扁平化
 * @param {Array} arr
 */
function flatten(arr) {
  return arr.reduce((prev, current) => {
    return prev.concat(Array.isArray(current) ? flatten(current) : current);
  }, []);
}

let arr = [1, 2, [3, 4], [5, 6, 7], [8], 9];
console.log(flatten(arr));
