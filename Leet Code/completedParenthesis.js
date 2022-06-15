// Day 4 Problem:
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.


var isValid = function (s) {
    const options = [{ symbol: "(", match: ")" }, { symbol: ")", match: "(" }, { symbol: "{", match: "}" }, { symbol: "}", match: "{" }, { symbol: "[", match: "]" }, { symbol: "]", match: "[" },]
    let string = s.split('')
    let result = true
    console.log(string)
    for (let i = 0; i < string.length; i++) {
        if (string[i + 1] !== options[i].match) {
            result = false
        } else {
            console.log("pass")
            i++
        }
        return result
    }
};

console.log(isValid("(]"))