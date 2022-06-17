// add var a and var b to get the given  number
//fuction going to be given a number 
//have divide this number by 2 until the result of your division is 0
//make  a var that holds the remenders in string form 

const addBinary = (a, b) => {
    let sum = a + b;
    let toggle = true
    let remainder = sum % 2
    let newString = remainder.toString()
    while (toggle) {
        sum = Math.floor(sum / 2)
        remainder = sum % 2
        if (sum !== 0) {
            newString += remainder.toString()
        }
        if (sum == 0) {
            let finalString = newString.split("").reverse().join("")
            return finalString
        }
    }
}
console.log(addBinary(266, 368))