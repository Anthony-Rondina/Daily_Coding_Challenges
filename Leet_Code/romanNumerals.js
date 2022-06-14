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
console.log(numeralToNumber("ix"))
