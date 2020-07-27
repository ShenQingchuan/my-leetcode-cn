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
    if (!arr.length) return null
    let linkedList = new ListNode(arr[0])
    let pointer = linkedList
    for (let i = 1; i < arr.length; i++) {
      pointer.next = new ListNode(arr[i])
      pointer = pointer.next
    }

    return linkedList
  },
  /** 打印单链表
   * @param {ListNode} node 
   */
  printLinkedList(node) {
    if (!node) return

    let pointer = node, res = ''
    while (pointer) {
      res += `${pointer.val}${pointer.next ? '->' : ''}`
      pointer = pointer.next
    }

    console.log(res)
  }
}
