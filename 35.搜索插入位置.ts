/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
	if (nums.indexOf(target) !== -1) {
		return nums.indexOf(target);
	} else {
		const index = nums.findIndex((v) => v > target);
		return index === -1 ? nums.length : index;
	}
};
// @lc code=end

