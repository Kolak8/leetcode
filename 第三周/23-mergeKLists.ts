// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null;
  let res: ListNode = new ListNode();
  res = mergeLists(lists, 0, lists.length - 1); // 分治用法
  return res;
}

function mergeLists(
  lists: Array<ListNode | null>,
  start: number,
  end: number
): ListNode {
  if (start > end) return null;
  if (end - start === 1) {
    const list1 = lists[start];
    const list2 = lists[end];
    return mergeTwoLists(list1, list2);
  } else if (end === start) {
    return lists[start];
  } else if (start < end) {
    const mid = Math.floor((start + end) / 2);
    return mergeTwoLists(
      mergeLists(lists, start, mid),
      mergeLists(lists, mid + 1, end)
    );
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode {
  const res = new ListNode();
  let p = res;
  let p1 = list1;
  let p2 = list2;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p = p.next;
      p1 = p1.next;
    } else {
      p.next = p2;
      p = p.next;
      p2 = p2.next;
    }
  }
  while (p1) {
    p.next = p1;
    p = p.next;
    p1 = p1.next;
  }
  while (p2) {
    p.next = p2;
    p = p.next;
    p2 = p2.next;
  }
  return res.next;
}
