/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  const peekLastDigit = () => {
    if (K === 0) return "end";
    const lastDigit = K % 10;
    K = parseInt(K / 10);
    return lastDigit;
  };
  const n = A.length;
  let result = [],
    up = false,
    endPeek = false;
  for (let i = n - 1; i >= 0; i--) {
    const lastDigit = peekLastDigit();
    if (lastDigit === "end") endPeek = true;
    let digit = endPeek ? A[i] : lastDigit + A[i];
    if (up) digit++; // 进位

    up = digit >= 10;
    if (up) digit = digit % 10;
    result.unshift(digit);
  }
  if (up) K++;
  if (K > 0) {
    const rest = "" + K;
    for (let i = rest.length - 1; i >= 0; i--) {
      result.unshift(parseInt(rest[i]));
    }
  }

  return result;
};
