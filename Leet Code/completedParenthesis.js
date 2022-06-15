// Day 4 Problem:
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.


const isValid = (s) => {
    const options = {
        "}": "{",
        "]": "[",
        ")": "(",
    }
    let result = true
    if (s.length % 2 !== 0) {
        return false
    }
    let collection = []
    const checkForOpenBracket = Object.values(options)

    for (let i = 0; i < s.length; i++) {
        if (checkForOpenBracket.includes(s[i])) {
            collection.push(s[i])
        } else {
            const mustMatch = collection.pop()
            if (mustMatch !== options[s[i]]) {
                return false
            }
        }
        return result
    };
}
console.log(isValid("{[]}"))