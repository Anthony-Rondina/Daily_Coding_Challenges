const romanToInt = (input) => {
    outputNumber = 0
    notANumeral = false
    numeralArray = input.toUpperCase().split('')
    console.log(numeralArray)
    for (let i = 0; i < numeralArray.length; i++) {
        switch (numeralArray[i]) {
            case 'I':
                if (numeralArray[i + 1] == "V") {

                    outputNumber += 4;
                } else if (numeralArray[i + 1] == "X") {
                    outputNumber += 9;
                } else {
                    outputNumber += 1;
                }
                break
            case 'V':
                if (numeralArray[i - 1] == "I") {
                    outputNumber += 0;
                } else {
                    outputNumber += 5;
                }
                break;
            case 'X':
                if (numeralArray[i + 1] == "L") {

                    outputNumber += 40;
                } else if (numeralArray[i + 1] == "C") {
                    outputNumber += 90;
                } else if (numeralArray[i - 1] == "I") {
                    outputNumber += 0;
                } else {
                    outputNumber += 10;
                }
                break;
            case 'L':
                if (numeralArray[i - 1] == "X") {
                    outputNumber += 0;
                } else {
                    outputNumber += 50;
                }
                break;
            case 'C':
                if (numeralArray[i + 1] == "D") {

                    outputNumber += 400;
                } else if (numeralArray[i + 1] == "M") {
                    outputNumber += 900;
                } else if (numeralArray[i - 1] == "X") {
                    outputNumber += 0;
                } else {
                    outputNumber += 100;
                }
                break;
            case 'D':
                if (numeralArray[i - 1] == "C") {
                    outputNumber += 0;
                } else {
                    outputNumber += 500;
                }
                break;
            case 'M':
                if (numeralArray[i - 1] == "C") {
                    outputNumber += 0;
                } else {
                    outputNumber += 1000;
                }
                break;
            default:
                notANumeral = true
                return false
        }
    }

    if (notANumeral) {
        return "Invalid Input"
    } else {
        return outputNumber
    }
}

console.log(romanToInt("xii"))