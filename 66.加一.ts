/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
	const newArr: number[] = [];
	const isNine = digits.every((v) => v === 9); // 判断是否全为9
	let flag = true; // 标志加一后的数据不是10
	for (let i = digits.length - 1; i >= 0; i--) {
		if (flag) {
			digits[i] = digits[i] + 1;
			if (digits[i] === 10) {
				newArr.push(0);
			} else {
				newArr.push(digits[i]);
				flag = false;
			}
		} else {
			newArr.push(digits[i]);
		}
	}
	return isNine ? [1, ...newArr.reverse()] : newArr.reverse();
};
// @lc code=end

