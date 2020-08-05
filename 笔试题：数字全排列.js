/** @param {any[]} arr */
function flatten(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArray.push(...flatten(arr[i]));
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function solution(arr) {
  if (arr.length <= 1) {
    return arr;
  } else if (arr.length === 2) {
    return [
      [arr[0], arr[1]],
      [arr[1], arr[0]],
    ];
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    let subseqs = solution(rest);
    for (let subseq of subseqs) {
      result.push([arr[i], ...flatten(subseq)]);
    }
  }

  return result;
}

/** @param {string} input */
function inputToArray(input) {
  input = input.trim();
  if (input.length === 0) return [];
  return input.split(" ").map((item) => Number(item));
}

// NIUKE ANSWER:
process.stdin.resume();
process.stdin.setEncoding("ascii");

let input = "";
process.stdin.on("data", (data) => {
  input += data;
});
process.stdin.on("end", () => {
  let arr = inputToArray(input);
  console.log(JSON.stringify(solution(arr)));
});

// DEBUG:
console.log(JSON.stringify(solution(inputToArray("1 2 3 4"))));
