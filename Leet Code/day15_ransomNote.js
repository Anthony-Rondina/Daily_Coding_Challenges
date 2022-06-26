// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

const canConstruct = (ransomNote, magazine) => {
    let note = ransomNote.split('')
    let mag = magazine.spilt('')
    for (let i = 0; i < ransomNote.length; i++) {
        if (note[i] !== mag[i]) {
            return false
        }
    }
    return true
}

console.log(canConstruct("aa", "aab"))