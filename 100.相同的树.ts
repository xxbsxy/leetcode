/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function inorderTraversal(root: TreeNode | null): number[] {
	if (!root) return [];
	if (!root.left && !root.right) return [root.val];
	const num: number[] = [];
	printInorderNode(root, num);
	return num;
}

function printInorderNode(root: TreeNode | null, num) {
	if (root) {
		printInorderNode(root.left, num);
		num.push(root.val);
		printInorderNode(root.right, num);
	}
}
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	return inorderTraversal(p).length === inorderTraversal(q).length && inorderTraversal(p).every((v, i) => v === inorderTraversal(q)[i])
}

// @lc code=end

