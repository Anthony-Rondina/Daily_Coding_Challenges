// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = (nums) => {
    let result = 0
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] !== nums[j] && i != j) {
                result = nums[i]
            }
        }
    }
    return result
}

console.log(singleNumber([4, 1, 2, 1, 2]))