/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
//   }
 

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  head!.next = head!.next!.next;
  let h = head;
  while (h?.next !== null) {
    if (h?.val === h?.next?.val) {
      head!.next = head!.next.next;
    } else {
      h = h!.next;
    }
  }
  return head;
}
// @lc code=end

