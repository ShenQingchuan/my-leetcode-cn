function deepClone(obj) {
  let clone = {};

  for (let key in obj) {
    console.log(`typeof obj[key]: ${typeof obj[key]}`);
    if (typeof obj[key] === "object") {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
}

let obj_x = {
  a: {
    b: Symbol(),
  },
  c: {
    d: function () {
      console.log("hello");
    },
    e: BigInt(956),
  },
};

let clone_x = deepClone(obj_x);
console.log(clone_x);
console.log(obj_x === clone_x);
