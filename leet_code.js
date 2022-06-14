// Day 0 Problem:
// Loop over an array of bank accounts and find the total of each account and return the account with the highest Number.

// const maximumWealth = (arr) => {
//     let total = 0;

//     // arr we looking at all accounts in the array 
//     //accounts is looking at indvidual bank account 
//     arr.forEach((accounts) => {
//         // let subtotal is being scoped so we can have each indvidual account to casue sperations.
//         let subTotal = 0;
//         //numbers are each number in the arrary for each indvidual person 
//         accounts.forEach((number) => {
//             // console.log("number is", number);
//             subTotal += number
//             // console.log("subtotal is", subTotal);
//             if (subTotal >= total) {
//                 total = subTotal
//             }
//         })
//     })
//     return total
// };



//   ------------------------------------------------
// Day 1 Problem:
// Loop over an array and return indicies of numbers that add up to target number

// const twoSum = (nums, target) => {
//     //create for loop to check first number against remaining array
//     for (let i = 0; i < nums.length; i++) {
//         //create for loop to check remaining numbers against first number
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 //create a new array to return where "i" and "j" are put in a new array to act as indexOf
//                 return [i, j]
//             }
//         }
//     }
// }
// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([3, 3], 6))
// console.log(twoSum([3, 2, 4], 6))
// console.log(twoSum([1, 3, 4, 2], 6))

//   ------------------------------------------------
// Day 2 Problem:
// Given an integer, return if the number is a palidrome

// const isPalindrome = (input) => {
//     let palCheck = input.toString().split('').reverse().join('')
//     if (input == palCheck) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isPalindrome(121))

//   ------------------------------------------------
// Day 3 Problem:
// make a function that takes in roman numerals and returns a number

const numeralToNumber = function (input) {
    input = input.toUpperCase()
    let numerals = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let output = 0
    for (let i = 0; i < input.length; i++) {
        console.log(input[i])
        if (numerals[input[i + 1]] > numerals[input[i]]) {
            output += numerals[input[i + 1]] - numerals[input[i]]
            i++
        } else {
            output += numerals[input[i]]
        }
    }
    return output
};
console.log(numeralToNumber("MCMXCIV"))