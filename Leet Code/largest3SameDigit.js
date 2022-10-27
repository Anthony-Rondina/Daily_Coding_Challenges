const largestGoodInteger = (num) => {
    let output = ""
    let currentLargest = ""
    // let numArr = num.split('')
    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
            // currentLargest = num[i] + num[i + 1] + num[i + 2]
            currentLargest.push(num[i], num[i + 1], num[i + 2])
            if (currentLargest >= output) {
                output = currentLargest.toString()
            }
        }
    }

    return output
};

console.log(largestGoodInteger("4233352338"))