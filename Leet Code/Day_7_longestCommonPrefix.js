// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
//ideas:
//loop through each letter in the array and as long as one word matches the same letter then keep going
//if not then return what you found
var longestCommonPrefix = function (strs) {
    let result = ''
    let index = strs[0].length
    // find shortest word in array
    let word = strs.reduce(function (a, b) {
        return a.length <= b.length ? a : b;
    })
    // console.log(`Shortest word is ${word}`)
    for (let i = 0; i < word.length; i++) {
        // console.log(`pass ${i}`)
        letter = ''
        let pass = true
        for (let j = 0; j < strs.length; j++) {
            let check = strs[j][i]
            // console.log(`line 24 check is ${check}`)
            // console.log(`line 25 checked letter is ${word[i]}`)
            if (word[i] == check) {
                letter = check
                // console.log(`pushed ${check} to ${result}`)
            } else {
                pass = false
            }
        }
        if (pass) {
            result += letter
        } else {
            return result
        }
    }
    return result
};

console.log(longestCommonPrefix(["cir", "car"]))