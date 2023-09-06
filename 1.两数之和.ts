/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
	let numArr: number[] = []
	for (let j = 0; j < nums.length; j++) {
		numArr = []
		for (let i = j; i < nums.length; i++) {
			numArr.push(nums[i])
			if (numArr.length === 2) {
				const sum = numArr[0] + numArr[1]
				if (sum === target) {
					const index1 = nums.findIndex(k => k === numArr[0])
					const index2 = nums.findIndex((k,index) => k === numArr[1] && index !== index1)
					numArr = [index1, index2]
					return numArr
				} else {
					numArr.pop()
				}
			}
		}
	}
	return numArr
};
// @lc code=end