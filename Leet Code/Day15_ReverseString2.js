// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

const reverseStr = (s, k) => {
    if (s.length < k)
        return s.split("").reverse().join("");
    let res = "";
    for (let i = 0; i < s.length; i += 2 * k) {
        res += s.split("").slice(i, i + k).reverse().join("");
        res += s.slice(i + k, i + 2 * k);
    }
    return res;
};

console.log(reverseStr("abcdefg",
    2))