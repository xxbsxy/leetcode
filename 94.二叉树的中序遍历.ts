/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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
// @lc code=end

