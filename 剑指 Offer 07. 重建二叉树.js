const { TreeNode, printTreeNode } = require('./utils/BinaryTree');

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length && !inorder.length) return null;

  let root = new TreeNode(preorder[0]);
  const mid = inorder.findIndex((e) => e === root.val);
  let leftInorderChildren = inorder.slice(0, mid);
  let leftPreorderChildren = preorder.slice(1, 1 + leftInorderChildren.length);
  let rightInorderChildren = inorder.slice(mid + 1);
  let rightPreorderChildren = preorder.slice(1 + leftInorderChildren.length);
  root.left = buildTree(leftPreorderChildren, leftInorderChildren);
  root.right = buildTree(rightPreorderChildren, rightInorderChildren);

  return root;
};

const preorder = [3,9,20,15,7]
const inorder = [9,3,15,20,7]

const tree = buildTree(preorder, inorder)
printTreeNode(tree)
