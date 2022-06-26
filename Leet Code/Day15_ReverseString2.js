// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

const reverseStr = (s, k) => {
    let arr = s.split('')
    let reverse = []
    if (s.length < k) {
        return s.split('').reverse().join('')
    }
    if (s.length < 2000 && s.length >= k) {
        for (let i = 0; i < k; i++) {
            let letter = arr[i]
            reverse.push(letter)
        }

        for (let i = 0; i < k; i++) {
            arr.shift()
        }
        arr.join('')
        reverse.reverse().join('')
        let result = reverse.concat(arr).join('')
        return result
    }
    for (let i = 0; i < k; i++) {
        let letter = arr[i]
        reverse.push(letter)
    }

    for (let i = 0; i < k; i++) {
        arr.shift()
    }
    arr.join('')
    reverse.reverse().join('')
    let result = reverse.concat(arr).join('')
    return result.join('')
};

console.log(reverseStr("abcdefg",
    2))