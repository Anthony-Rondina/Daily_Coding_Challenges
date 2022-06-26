// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

const reverseStr = (s, k) => {
    //If s is less than k reverse s entirely
    if (s.length < k)
        return s.split("").reverse().join("");
    //Creating final variable
    let res = "";
    //loop through s and skip through every 2 of k
    for (let i = 0; i < s.length; i += 2 * k) {
        //add to res from splitting s into array, slice the current number with i and i+k means how many in addition
        res += s.split("").slice(i, i + k).reverse().join("");
        res += s.slice(i + k, i + 2 * k);
    }
    return res;
};

console.log(reverseStr("abcdefg",
    2))