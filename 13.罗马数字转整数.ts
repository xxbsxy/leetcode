/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
	function getValue(s:string): number {
		const arr = [
			{ name: 'I', value: 1 },
			{ name: 'V', value: 5 },
			{ name: 'X', value: 10 },
			{ name: 'L', value: 50 },
			{ name: 'C', value: 100 },
			{ name: 'D', value: 500 },
			{ name: 'M', value: 1000 },
		]
		return arr.find(v => v.name === s)!.value
	}

	function sortArr(arr: number[]): number[] {
    const newArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        newArr.push(arr[i]);
        break;
      }
      if (arr[i] >= arr[i + 1]) {
        newArr.push(arr[i]);
      } else {
        newArr.push(arr[i + 1] - arr[i]);
        i++;
      }
    }
    return newArr;
	}

function romanToInt(s: string): number {
	const stringArr = [...s]
	let newArr: number[] = sortArr(stringArr.map(i => getValue(i))) 
	return newArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
// @lc code=end
