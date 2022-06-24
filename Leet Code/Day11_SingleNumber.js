// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = (nums) => {
    let freq = {}
    for (let i = 0; i < nums.length; i++) {
        let character = nums[i];
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }
    return Object.keys(freq).find(key => freq[key] === 1)
}

console.log(singleNumber([10, 10, 20, 20, 2, 2, 1, 1, 2, 3, 2, 3, 5, 5, 6]))