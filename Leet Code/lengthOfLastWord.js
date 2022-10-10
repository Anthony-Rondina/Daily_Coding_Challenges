// // // var lengthOfLastWord = function (s) {
// // //     let arr = s.trim().split(' ')
// // //     return arr[arr.length - 1].length
// // // };

// // // console.log(lengthOfLastWord("   fly me   to   the moon  "))

// // var isPalindrome = function (s) {
// //     str = s.replace(/[^\w\s]|_/g, "")
// //         .replace(/\s+/g, "");
// //     let check = str.toLowerCase()
// //     let reverse = str.toLowerCase().split('').reverse().join('')
// //     console.log(check, reverse)
// //     if (check == reverse) {
// //         return true
// //     } else {
// //         return false
// //     }
// // };

// // console.log(isPalindrome(
// //     "Marge, let's \"[went].\" I await {news} telegram."))

// var containsDuplicate = function (nums) {
//     // let counter = {}
//     // let duplicate = false
//     // nums.forEach((number) => {
//     //     if (!counter[number]) {
//     //         counter[number] = 1
//     //     } else {
//     //         counter[number] += 1
//     //         duplicate = true
//     //     }
//     // })
//     // if (duplicate) {
//     //     return true
//     // }
//     // return false
// };
// console.log(containsDuplicate([1, 2, 3, 1]))

var divide = function (dividend, divisor) {
    let quotent = dividend / divisor
    if (quotent == 2147483648) {
        return 2147483647
    } else if (quotent > 0) {
        return Math.floor(quotent)
    } else {
        return Math.ceil(quotent)
    }

};

console.log(divide(
    -2147483648, -1))