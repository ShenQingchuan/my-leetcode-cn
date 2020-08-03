function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    let that = this;
    clearTimeout(timer); // --- 1
    timer = setTimeout(function () {
      fn.apply(that, args); // --- 2  如果要立即执行，就交换一下 1 和 2
    }, delay);
  };
}

function throttle(fn, delay) {
  let previous = 0;

  return function (...args) {
    let now = +new Date();
    let context = this;
    if (now - previous > delay) {
      // 这里第一次会立即执行
      fn.apply(context, args);
      previous = now;
    }
  };
}
