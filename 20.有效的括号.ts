/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isSame(s1:string, s2:string) {
	const arr = [
		{s1: '(', s2: ')'},
		{s1: '[', s2: ']'},
		{s1: '{', s2: '}'}
	]
	return  s2 === arr.find(v => v.s1 === s1)?.s2
 }
function isValid(s: string): boolean {
	const stringArr = [...s]
	const newArr: string[] = []
	for (let i = 0; i < stringArr.length; i++) {
		if (['(', '[', '{'].includes(stringArr[i])) {
			newArr.push(stringArr[i])
		} else {
			if (!isSame(newArr.pop()!, stringArr[i] )) return false
		}
	}
	return newArr.length === 0 ? true :false
};
// @lc code=end

