// var lengthOfLastWord = function (s) {
//     let arr = s.trim().split(' ')
//     return arr[arr.length - 1].length
// };

// console.log(lengthOfLastWord("   fly me   to   the moon  "))

var isPalindrome = function (s) {
    str = s.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, "");
    let check = str.toLowerCase()
    let reverse = str.toLowerCase().split('').reverse().join('')
    console.log(check, reverse)
    if (check == reverse) {
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(
    "Marge, let's \"[went].\" I await {news} telegram."))