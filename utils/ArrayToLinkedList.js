function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = {
  ListNode,
  /** 数组转单链表
   * @param {any[]} arr
   */
  ArrayToLinkedList(arr) {
    if (!arr.length) return null;
    let linkedList = new ListNode(arr[0]);
    let pointer = linkedList;
    for (let i = 1; i < arr.length; i++) {
      pointer.next = new ListNode(arr[i]);
      pointer = pointer.next;
    }

    return linkedList;
  },
  /** 打印单链表
   * @param {ListNode} node
   */
  printLinkedList(node) {
    if (!node) return;

    let pointer = node,
      res = "";
    while (pointer) {
      res += `${pointer.val}${pointer.next ? "->" : ""}`;
      pointer = pointer.next;
    }

    console.log(res);
  },
  /** 打印单链表
   * @param {ListNode} node
   */
  reverseLinkedList(node) {
    let next = node;
    let pre = null;
    while (next) {
      let cc = next.next;
      next.next = pre;
      pre = next;
      next = cc;
      // 下面是上面4行代码的简写（es6的解构赋值，简化了多行的赋值代码）
      // [nxt.next, pre, nxt]=[pre, nxt, nxt.next]
    }
    return pre;
  },
};
