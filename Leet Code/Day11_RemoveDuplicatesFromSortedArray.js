// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

const removeDuplicates = (nums) => {
    //create loop to iterate through array
    for (let i = 0; i < nums.length - 1; i++) {
        //Check if current item in array matches the next item in array
        if (nums[i] == nums[i + 1]) {
            //Remove current item in array
            nums.splice(i, 1)
            //VERY IMPORTANT! Since item has been removed, start the loop over again on the same index of array
            i = i - 1
        }
    }
    //For answer: setting k to display length of array and return along with fixed nums array
    let k = nums.length
    return { k, nums }
};

console.log(removeDuplicates([0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9]))