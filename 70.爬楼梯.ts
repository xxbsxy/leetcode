/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function fbnq(n: number): number {
	const arr = [1, 2];
	for (let i = 2; i < n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	return arr[n - 1];
}

function climbStairs(n: number): number {
	if (n === 1 || n === 2) {
		return n;
	}
	return fbnq(n);
}
// @lc code=end

