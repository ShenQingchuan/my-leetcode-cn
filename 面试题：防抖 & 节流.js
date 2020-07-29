function debounce(fn, delay) {
  let timer = null;
  return function (args) {
    let that = this;
    let _args = args;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.call(that, _args);
    }, delay);
  };
}

function throttle(fn, delay) {
  let context, args;
  let previous = 0;

  return function () {
    let now = +new Date();
    context = this;
    args = arguments;
    if (now - previous > delay) {
      // 这里第一次会立即执行
      fn.apply(context, args);
      previous = now;
    }
  };
}
