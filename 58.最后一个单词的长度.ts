/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
	return [...s.trim()].length - 1 - [...s.trim()].lastIndexOf(' ');
};
// @lc code=end

