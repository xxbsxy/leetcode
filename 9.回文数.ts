/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
	const stringArr = [...x.toString()]
	const stringArrReverse = [...x.toString()].reverse()
	const flag = stringArr.every((v, index) => v === stringArrReverse[index])
	return flag
};
// @lc code=end
