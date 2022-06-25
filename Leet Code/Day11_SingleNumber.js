// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = (nums) => {
    //Starting a frequency counter object
    let freq = {}
    //Loop through array
    for (let i = 0; i < nums.length; i++) {
        //Set my focused character as the current item in array
        let character = nums[i];
        //If the item currently exists in my frequency counter object then increase it's value by 1
        if (freq[character]) {
            freq[character]++;
        } else {
            //If it does not exist in the frequency counter object then initialize it with a value of 1
            freq[character] = 1;
        }
    }
    console.log(freq)
    //Look through the keys in the frequency counter object and return the key who's value is 1
    return Object.keys(freq).find(key => freq[key] === 1)
}

console.log(singleNumber([10, 10, 20, 20, 2, 2, 1, 1, 2, 3, 2, 3, 5, 5, 6]))