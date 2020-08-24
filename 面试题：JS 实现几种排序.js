/** 快速排序 @param {any[]} arr */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = Math.floor(arr.length / 2),
    pivot = arr.splice(pivotIndex, 1)[0],
    left = [],
    right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

/** 归并排序 @param {any[]} array */
function mergeSort(array) {
  function merge(leftArr, rightArr) {
    let result = [];
    while (leftArr.length > 0 && rightArr.length > 0) {
      // 小的最先取出，放到结果集中
      if (leftArr[0] < rightArr[0]) result.push(leftArr.shift());
      else result.push(rightArr.shift());
    }
    return result.concat(leftArr).concat(rightArr); // 剩下的就是合并，这样就排好序了
  }

  if (array.length === 1) return array;
  let middle = Math.floor(array.length / 2); // 求出中点
  let left = array.slice(0, middle); // 分割数组
  let right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right)); // 递归合并与排序
}
