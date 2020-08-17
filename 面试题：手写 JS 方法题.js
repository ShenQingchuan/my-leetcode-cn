// .bind .call .apply
Function.prototype.mcall = function (context, ...args) {
  context = typeof context === "object" ? context : window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
Function.prototype.mapply = function (context, args = []) {
  context = typeof context === "object" ? context : window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
Function.prototype.mbind = function (context, ...args) {
  const _this = this;
  return function Bound(...newArgs) {
    if (this instanceof Bound) {
      return _this.mapply(this, [...args, ...newArgs]);
    }
    return _this.mapply(context, [...args, ...newArgs]);
  };
};

// 手写 new 方法实现
function _new1() {
  let obj = new Object();
  // 取出第一个参数，即构造函数
  let constructorFunc = Array.prototype.shift.call(arguments);
  obj.__proto__ = constructorFunc.prototype;
  constructorFunc.apply(obj, arguments);
  return obj;
}
Object.mcreate = function (obj, props) {
  let fn = function () {};
  fn.prototype = obj;
  if (props) {
    Object.defineProperty(fn, props);
  }
  return new fn();
};
function _new2(constructorFunc, ...args) {
  let obj = Object.mcreate(constructorFunc.prototype);
  let result = constructorFunc.apply(obj, args);
  return result;
}
// 手写 instanceof
function _instanceof(target, origin) {
  // 非 object 直接返回 false
  if (typeof target !== "object" || target === null) return false;

  let proto = Object.getPrototypeOf(target);
  while (proto) {
    if (proto === origin.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto); // 原型链上溯
  }
  return false;
}

// 手写 Promise.all
/** @param {Array<Promise>} promises */
Promise.myall = function (promises) {
  return new Promise((resolve, reject) => {
    let promiseCount = promises.length, // 获取 promises 数组长度
      resolvedValues = [], // 维护每个 promise 的结果数组
      resolvedCount = 0; // 已经 resolve 的个数

    for (let i = 0; i < promisesCount; i++) {
      promises[i].then(
        (result) => {
          // 每一个 promise resolve 之后的回调，都把 resolve 的值加入数组
          resolvedCount++;
          resolvedValues[i] = result;
          if (resolvedCount === promiseCount) {
            return resolve(resolvedValues);
          }
        },
        (err) => {
          return reject(err); // 如果这 n 个 promise 中有一个被 reject 了，就调用整个 all 方法的 reject
        }
      );
    }
  });
};
