function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/** 打印二叉树
* @param {TreeNode} node 
* @param {number} tab
* @returns {void}
*/
function printTreeNode(node, tab = 0) {
 if (!node) return

 let str = ''
 if (tab > 1) {
  for (let i = 0; i<tab; ++i) {
    str += ' '
  }
 }
 if (tab) str += '└─'
 if (node.val) str += node.val
 console.log(str)
 printTreeNode(node.left, tab + 1)
 printTreeNode(node.right, tab + 1)
}

module.exports = {
  TreeNode,
  printTreeNode
}
