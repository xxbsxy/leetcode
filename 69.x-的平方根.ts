/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
function mySqrt(x: number): number {
	if (x < 2) return x;
	let left = 0,
		right = x;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (mid * mid > x) right = mid - 1;
		else if (mid * mid < x) left = mid + 1;
		else return Math.floor(mid);
	}
	return right;
}
// @lc code=end

