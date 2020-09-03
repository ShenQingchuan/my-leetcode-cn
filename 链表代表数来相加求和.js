const {
  ListNode,
  ArrayToLinkedList,
  printLinkedList,
  reverseLinkedList,
} = require("./utils/ArrayToLinkedList");

const h = ArrayToLinkedList;

/** 若一个链表所有节点数值大于 0 小于 9
 * 请求出两个“链表数”相加的结果：
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
function addLinkdedListNumber(l1, l2) {
  console.log("list1, list2: ");
  printLinkedList(l1);
  printLinkedList(l2);
  let rl1 = reverseLinkedList(l1),
    rl2 = reverseLinkedList(l2),
    p1 = rl1,
    p2 = rl2,
    bitUp = false,
    resultList = new ListNode(),
    p3 = resultList;

  while (p1 && p2) {
    let bitSum = p1.val + p2.val;
    if (bitUp) bitSum++;
    bitUp = bitSum >= 10;
    if (bitUp) bitSum -= 10;
    p3.val = bitSum;

    p1 = p1.next;
    p2 = p2.next;
    if ((p1 && p2) || bitUp) {
      p3.next = new ListNode(bitUp ? 1 : undefined);
      p3 = p3.next;
    }
  }
  let rest = p1 || p2;
  if (rest) {
    // 两个链长度不相等
    while (rest) {
      if (bitUp) rest.val++;
      bitUp = rest.val >= 10;
      if (bitUp) rest.val -= 10;
      p3.val = rest.val;

      rest = rest.next;
      if (rest || bitUp) {
        p3.next = new ListNode(bitUp ? 1 : undefined);
        p3 = p3.next;
      } else break;
    }
  } else {
    if (bitUp) p3.val = 1;
  }

  return reverseLinkedList(resultList);
}

printLinkedList(addLinkdedListNumber(h([9, 3, 7]), h([6, 3])));
printLinkedList(addLinkdedListNumber(h([4, 9, 3, 7]), h([2, 6, 3])));
printLinkedList(addLinkdedListNumber(h([1, 9, 3, 7]), h([8, 4, 6, 3])));
