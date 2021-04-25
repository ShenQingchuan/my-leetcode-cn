const exportsFromArrayToLinkedList = require('./LinkedList');
const exportsFromBinaryTree = require('./BinaryTree');
const exportsFromTinyJest = require('./tinyJest');

module.exports = {
  ...exportsFromArrayToLinkedList,
  ...exportsFromBinaryTree,
  ...exportsFromTinyJest
};
