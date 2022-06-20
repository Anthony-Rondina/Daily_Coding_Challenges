// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


const toCamelCase = (str) => {
    let checkArr = str.split('')
    if (checkArr.includes('-')) {
        while (checkArr.includes('-')) {
            let idx = checkArr.indexOf('-')
            checkArr.splice(idx, 1)
            checkArr.splice(idx, 1, checkArr[idx].toUpperCase())
        }
    }
    if (checkArr.includes('_')) {
        while (checkArr.includes('_')) {
            let idx = checkArr.indexOf('_')
            checkArr.splice(idx, 1)
            checkArr.splice(idx, 1, checkArr[idx].toUpperCase())
        }
    }
    checkArr = checkArr.join('')
    return checkArr
}

console.log(toCamelCase("this-should-work"))


