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
