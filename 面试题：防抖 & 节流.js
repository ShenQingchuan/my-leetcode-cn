function debounce(fn, delay, immediate) {
  let timer = null;

  if (immediate) {
    return function (...args) {
      if (!timer) {
        let context = this;
        fn.apply(context, args);
        timer = setTimeout(() => {
          timer = null;
        }, delay);
      }
    };
  } else {
    return function (...args) {
      let context = this;
      timer = setTimeout(function () {
        fn.apply(context, args);
        timer = null;
      }, delay);
    };
  }
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
