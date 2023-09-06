/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
	const firstStringArr = [...strs[0]]
	const stringArr: string[] = []
	for(let i = 0; i < firstStringArr.length;i++) {
		if(strs.every(v => [...v][i] === firstStringArr[i])) {
			stringArr.push(firstStringArr[i])
		} else {
			break;
		}
	}
	return stringArr.length === 0 ? '' : stringArr.join('')
};
// @lc code=end

