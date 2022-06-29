// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

const restoreString = (s, indicies) => {
    //split string into array
    let sorted = s.split('')
    //loop through array
    for (let i = 0; i < s.length; i++) {
        //the section of the array should equal the letter with the matching value
        sorted[indicies[i]] = s[i]
    }
    return sorted.join('')
}

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]))