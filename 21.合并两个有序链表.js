/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (59.25%)
 * Likes:    926
 * Dislikes: 0
 * Total Accepted:    219K
 * Total Submissions: 360.5K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// function ListNode(val, next) {
//   this.val = val;
//   this.next = next;
// }
// function traverseLinkedList(list) {
//   let listPtr = list
//   let str = ''
//   while (listPtr) {
//     str += listPtr.val + (listPtr.next ? '->':'')
//     listPtr = listPtr.next
//   }
//   console.log(str)
// }
// /** @param {Array} arr */
// function generateLinkedList(arr) {
//   if (arr.length === 0) {
//     return null
//   }
//   let list = new ListNode(arr[0])
//   let ptr = list
//   for(let i=1; i<arr.length; i++) {
//     let node = new ListNode(arr[i])
//     ptr.next = node
//     ptr = ptr.next
//   }

//   return list
// }

// 解题入口函数：
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 全取出来排序再拼上
  let arr = []
  let l1Ptr = l1, l2Ptr = l2
  while (l1Ptr) {
    arr.push(l1Ptr.val)
    l1Ptr = l1Ptr.next
  }
  while (l2Ptr) {
    arr.push(l2Ptr.val)
    l2Ptr = l2Ptr.next
  }
  if (arr.length === 0) {
    return null
  }

  arr.sort((a, b) => a - b)
  const newList = new ListNode(arr[0])
  let newPtr = newList
  for (let i = 1; i < arr.length; i++) {
    const newNode = new ListNode(arr[i])
    newPtr.next = newNode
    newPtr = newPtr.next
  }
  return newList
};

// let l1 = generateLinkedList([])
// let l2 = generateLinkedList([])
// ls1 = mergeTwoLists(l1, l2)
// traverseLinkedList(l1)
// @lc code=end
