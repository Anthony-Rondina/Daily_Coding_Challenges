// Day 4 Problem:
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.


const isValid = (s) => {

    const options = Object.freeze({
        "(": ")",
        "{": "}",
        "[": "]"
    });

    const collection = [];
    if (s.length == 0 || s.length % 2 != 0) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        let character = s[i]
        if (character in options) {
            collection.push(character);
        } else if (character != options[collection.pop()]) {
            return false;
        }
    }

    return collection.length == 0;

}
console.log(isValid("(]"))