// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let p1: ListNode | null = list1;
  let p2: ListNode | null = list2;
  let res: ListNode | null = new ListNode(0, null);
  let p3: ListNode | null = res;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p3.next = p1;
      p3 = p3.next;
      p1 = p1.next;
    } else {
      p3.next = p2;
      p3 = p3.next;
      p2 = p2.next;
    }
  }
  p3.next = p1 ? p1 : p2;
  return res.next;
}
