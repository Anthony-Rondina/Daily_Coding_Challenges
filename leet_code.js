// Day 1 Problem:
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

const twoSum = (nums, target) => {
    //create for loop to check first number against remaining array
    for (let i = 0; i < nums.length; i++) {
        //create for loop to check remaining numbers against first number
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                //create a new array to return where "i" and "j" are put in a new array to act as indexOf
                return [i, j]
            }
        }
    }
}
// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([3, 3], 6))
console.log(twoSum([3, 2, 4], 6))
// console.log(twoSum([1, 3, 4, 2], 6))