const {
  ArrayToLinkedList,
  reverseLinkedList,
  expect,
  test
} = require('./utils');

const sample1 = ArrayToLinkedList([1, 2]);
const sample2 = ArrayToLinkedList([1, 2, 2, 1]);
const mySample1 = ArrayToLinkedList([1, 4, 5, 6, 5, 4, 1]);
const mySample2 = ArrayToLinkedList([1, 2, 5, 6, 2, 4, 1]);
const mySample3 = ArrayToLinkedList([1, 3, 2, 4, 3, 2, 1]);

/** 判断是否为回文整数链表
 * @param {ListNode} listHead
 * @returns {boolean}
 */
const isPalindrome = (listHead) => {
  if (!listHead) return false;
  else if (!listHead.next) return true;
  else if (!listHead.next.next) {
    return listHead.val === listHead.next.val;
  }

  let slow = listHead,
    fast = listHead;

  while (fast) {
    if (fast.next) {
      fast = fast.next.next;
    } else {
      break;
    }

    slow = slow.next;
  }

  let pointer = listHead;
  slow = reverseLinkedList(slow);
  while (slow) {
    if (pointer.val !== slow.val) {
      return false;
    }
    slow = slow.next;
    pointer = pointer.next;
  }

  return true;
};

test('是否为回文串', () => {
  expect(isPalindrome(sample1)).toBe(false);
  expect(isPalindrome(sample2)).toBe(true);
  expect(isPalindrome(mySample1)).toBe(true);
  expect(isPalindrome(mySample2)).toBe(false);
  expect(isPalindrome(mySample3)).toBe(false);
});
