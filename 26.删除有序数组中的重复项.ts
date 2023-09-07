/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
	nums.splice(0, nums.length, ...[...new Set(nums)]);
	return [...new Set(nums)].length;
};
// @lc code=end
