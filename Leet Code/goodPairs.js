// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

const pairs = (nums) => {
    let goodPairs = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                console.log(`${nums[i]} = ${nums[j]}`)
                goodPairs++
            }
        }

    }
    //return result
    return goodPairs
}

console.log(pairs([1, 2, 3, 1, 1, 3]))