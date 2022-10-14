// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

const pairs = (nums) => {
    let goodPairs = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[0] == nums[i + 1]) {
            console.log(`${nums[0]} = ${nums[i + 1]}`)
            goodPairs++
        }
    }
    return goodPairs
}

console.log(pairs([1, 1, 0, 0, 1]))