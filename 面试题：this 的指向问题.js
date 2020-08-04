"use strict"; // 注释此行来切换是否为严格模式

function testIndependentCall() {
  console.log("IndependentCall: ", this);
}
testIndependentCall();

let obj = {
  a: 2,
  fn: function () {
    console.log("ObjFn: ", this); // 此函数现在是 obj 对象的方法，故 this 指向 obj

    function testObjFnInnerFn() {
      console.log("ObjFnInnerFn: ", this);
    }
    testObjFnInnerFn("testObjFnInnerFn: ", this); // 独立调用

    const testObjFnInlineFn = () => {
      console.log("ObjFnInlineFn: ", this);
    };
    testObjFnInlineFn(); // 内联函数 this 与当前对象保持一致

    return testObjFnInnerFn;
  },
};
obj.fn()(); // 返回后还是被独立调用

/**
 * 独立调用：
 *   - 浏览器环境下：默认指向 Window 对象
 *   - Node 环境下：
 *      · 严格模式：undefined
 *      · 非严格模式：[Object global] 全局对象
 */
