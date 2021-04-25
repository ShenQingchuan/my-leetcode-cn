const _ = require('underscore');
const { red, green, whiteBright, blueBright, bold } = require('chalk');

const TestStatus = {
  WAITING: -1,
  FAILED: 0,
  PASS: 1
};

const testCases = [];
let currentCase = null;

/** 开启一个测试集
 * @param {string} name
 * @param {() => void} fn
 */
function test(name, fn) {
  console.log(`* 测试 ${blueBright(name)}`);

  let newCase = {
    name,
    status: TestStatus.WAITING,
    units: []
  };
  testCases.push(newCase);
  currentCase = newCase;

  fn(); // 运行测试内容函数，装载测试单元

  const unitLength = currentCase.units.length;
  currentCase.units.forEach((unit, index) => {
    if (!unit.result) {
      console.log(
        `(${index + 1}/${unitLength}) ${bold(red('ERROR: '))} ${bold(
          whiteBright(unit.failedMessage)
        )}`
      );
    } else {
      console.log(
        `(${index + 1}/${unitLength}) ${bold(green('PASS: '))}  ${bold(
          whiteBright(unit.passMessage)
        )}`
      );
    }
  });
}

/** 判断是否为预期值的测试
 * @param {any} inputValue
 */
function expect(inputValue) {
  const unit = {
    result: TestStatus.WAITING,
    passMessage: '',
    failedMessage: ''
  };

  const returns = {
    toBe: (matchValue) => {
      const result = _.isEqual(inputValue, matchValue);
      unit.result = result;
      unit.passMessage = `  input value: ${blueBright(
        inputValue
      )} equals expected value: ${blueBright(matchValue)}`;
      unit.failedMessage = `  input value: ${blueBright(
        inputValue
      )} is not as expected value: ${blueBright(matchValue)}`;
    }
  };

  currentCase.units.push(unit);
  return returns;
}

module.exports = {
  test,
  expect
};
