/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
	if (!nums.includes(val)) {
		return nums.length;
	}
	const length = nums.length;

	for (let i = 0; i < length; i++) {
		const index = nums.indexOf(val);
		if (index === -1) {
			break;
		} else {
			nums.splice(index, 1);
		}
	}
	return nums.length;
};
// @lc code=end

