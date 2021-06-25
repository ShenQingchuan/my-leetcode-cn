/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 // solution 1: dummy -- get length and L-n+1:
const getLinkedListLength = (head) => {
    let ptr = head, len = 0;
    while (ptr) {
        len++
        ptr = ptr.next
    }
    return len
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0, head)
  const len = getLinkedListLength(head)
  let ptr = dummy
  for (let i = 1; i < len - n + 1; i++) {
    ptr = ptr.next
  }
  ptr.next = ptr.next.next
  const ret = dummy.next
  delete dummy
  return ret
};
