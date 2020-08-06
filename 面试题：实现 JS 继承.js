/**
方式：原型链继承
优点：能够实现函数复用
缺陷：
  1.引用类型的属性被所有实例共享；
  2.创建子类时不能向超类传参
*/
function _inheritByPrototype(child, parent) {
  child.prototype = new parent();
}

/**
方式：借用构造函数
优点：
  1. 避免了引用类型的属性被所有实例共享; 
  2. 可以在子类中向超类传参
缺陷：方法都在构造函数中定义了，每次创建实例都会创建一遍方法，无法实现函数复用
*/
function Parent2(arg) {
  // parent statements...
}
function Child2(arg) {
  Parent.call(this, arg);
}

/**
方式：组合继承
优点：融合了原型链继承和构造函数的优点，是 Javascript 中最常用的继承模式
缺陷：创建子类会调用两次超类的构造函数  两次见下方说明
*/
function Parent3(arg1, arg2) {
  // parent statements...
}
function Child3(arg1, arg2, arg3) {
  Parent.call(this, arg1, arg2); // 创建子类实例时会执行一次
  this.arg3 = arg3;
}
Child3.prototype = new Parent3(); // 建立父子关系、指定子类原型会执行一次
Child3.prototype.constructor = Child3; // 校正构造函数

/**
方式：原型继承
优点：在没有必要兴师动众地创建构造函数，而只是想让一个对象与另一个对象保持类似的情况下，原型式继承完全可以胜任
缺陷：引用类型的属性会被所有实例共享
*/

/**
方式：寄生式继承
优点：可以增强对象
缺陷：
  使用寄生式继承来为对象添加函数，会由于不能做到函数复用造成效率降低，
  这一点与构造函数模式类似；同时存在引用类型的属性被所有实例共享的缺陷
*/

/**
方式：寄生组合继承
优点：
  复制了超类原型的副本，而不必调用超类构造函数；既能够实现函数复用，
  又能避免引用类型实例被子类共享，同时创建子类只需要调用一次超类构造函数
缺陷：暂无
*/
function _inheritAdvancedParasiticComposition(child, parent) {
  let obj = parent.prototype;
  obj.constructor = child;
  for (let key in child.prototype) {
    Object.defineProperty(obj, key, {
      value: child.prototype[key],
    });
  }
  child.prototype = obj;
} // 增强型寄生组合式继承

function Animal(name) {
  this.name = name;
  this.greet = function () {
    console.log("I am " + this.name);
  };
}

Animal.prototype.anyFunc = function () {
  console.log("Animal anyFunc: this -> ", this);
};

Animal.staticFunc = function () {
  console.log("Animal staticFunc? -> ", this);
};

let a = new Animal("Tomy");
console.log("Animal object: ", a);
a.greet();
a.anyFunc();
Animal.staticFunc();

function Dog(name) {
  Animal.call(this, name);
  this.greet = function () {
    console.log("Dog: I am " + this.name);
  };
}
_inheritAdvancedParasiticComposition(Dog, Animal); // Dog extends Animal
let d = new Dog("Bob");
console.log("Dog object: ", d);
d.greet();
d.anyFunc(); // 继承父类方法

/** Node 打印结果如下：
Animal object:  Animal { name: 'Tomy', greet: [Function] }
I am Tomy
Animal anyFunc: this ->  Animal { name: 'Tomy', greet: [Function] }
Animal staticFunc? ->  [Function: Animal] { staticFunc: [Function] }
Dog object:  Dog { name: 'Bob', greet: [Function] }
Dog: I am Bob
Animal anyFunc: this ->  Dog { name: 'Bob', greet: [Function] }
 */
