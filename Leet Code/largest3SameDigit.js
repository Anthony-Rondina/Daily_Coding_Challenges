const largestGoodInteger = (num) => {
    let output = ""
    let currentLargest = ""
    let numArr = num.split('')
    console.log(numArr)
    for (let i = 0; i < numArr.length - 2; i++) {
        console.log(numArr[i], numArr[i + 1], numArr[i + 2])
        if (numArr[i] === numArr[i + 1] && numArr[i] === numArr[i + 2]) {
            console.log('success')
            currentLargest = numArr[i] + numArr[i + 1] + numArr[i + 2]
            console.log('current is', currentLargest)
            if (currentLargest >= output) {
                output = currentLargest.toString()
            }
        }
    }
    if (output.length > 3) {
        output = ''
    }
    return output
};

console.log(largestGoodInteger("42352338"))