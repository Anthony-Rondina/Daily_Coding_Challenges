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
    let resultArr = []
    let firstNumber = 0
    let secondNumber = 0
    for (let i = 0; i < nums.length; i++) {
        for (let t = 1; t < nums.length; t++) {
            if (nums[i] + nums[t] == target) {
                resultArr.push(nums.indexOf(nums[i]))
                resultArr.push(nums.indexOf(nums[t], 1))
                return resultArr
            } else {
                console.log('error')
            }
        }
    }
}

console.log(twoSum([2, 1, 4, 5, 3, 3], 6))