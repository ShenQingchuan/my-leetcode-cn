let obj = {
  a: {
      b: {     
          c: 1
      },
      d: 2,
  }
}

/**
 * @param {Object} obj 
 */
function flattenObject(obj) {
  let result = {}

  function generate(obj, key, keys) {
    if (typeof obj[key] === 'object') {
      keys.push(key)
      for (let child_key of Object.keys(obj[key])) {
        generate(obj[key], child_key, keys)
      }
      keys.pop()
    } else {
      result[[...keys, key].join('.')] = obj[key]
      keys.pop()
    }
  }

  for (let key of Object.keys(obj)) {
    generate(obj, key, [])
  }

  console.log(JSON.stringify(result, null, 2))
}

flattenObject(obj)
