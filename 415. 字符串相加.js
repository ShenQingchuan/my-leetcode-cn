/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let p1 = num1.length - 1,
    p2 = num2.length - 1;
  let bitUp = false,
    sum = "";

  /** @param {number} bit */
  const bitHelper = (bit) => {
    if (bitUp) bit++;
    bitUp = bit >= 10;
    if (bitUp) bit %= 10;
    sum = bit + sum;
  };

  while (p1 >= 0 && p2 >= 0) {
    let n1Bit = Number(num1[p1]),
      n2Bit = Number(num2[p2]);
    let bit = n1Bit + n2Bit;
    bitHelper(bit);
    p1--;
    p2--;
  }

  if (p2 < 0) {
    // num1 位数更多，数字更长
    for (let bit of num1
      .slice(0, p1 + 1)
      .split("")
      .reverse()
      .join("")) {
      bitHelper(Number(bit));
    }
  } else if (p1 < 0) {
    for (let bit of num2
      .slice(0, p2 + 1)
      .split("")
      .reverse()
      .join("")) {
      bitHelper(Number(bit));
    }
  }

  if (bitUp) {
    // 最后还有进位
    sum = "1" + sum;
  }

  return sum;
};

console.log(addStrings("9133", "0"));
