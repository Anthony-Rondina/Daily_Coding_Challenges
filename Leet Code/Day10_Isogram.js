// // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// function isIsogram(str) {
//     //split string into individual characters. 
//     let array = str.split('');
//     let sortedArr = array.slice().sort();
//     console.log("sortedArr is", sortedArr)

//     for (let i = 0; i < array.length; i++) {
//         //if duplicate is found return false.
//         console.log("back is", sortedArr[i - 1])
//         if (sortedArr[i = 1] == sortedArr[i]) {
//             return false;
//         }
//     }
//     return true
// }
// console.log(isIsogram("Dermatoglyphics"));//true
// console.log(isIsogram("adferta")); //false

const twoSum = (target, nums) => {

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return true
            }
        }
    }
}


console.log(twoSum(9, [2, 11, 15, 7]))