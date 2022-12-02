// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.



// const dayOfTheWeek = (day, month, year) => {
//     let a = new Date(year, month - 1, day).toString().substring(0, 3);
//     let b = {
//         Sun: "Sunday",
//         Mon: "Monday",
//         Tue: "Tuesday",
//         Wed: "Wednesday",
//         Thu: "Thursday",
//         Fri: "Friday",
//         Sat: "Saturday",
//     };

//     return b[a];
// }

// console.log(dayOfTheWeek(1, 10, 2020))

const convertCase = (input) => {
    arr = input.split('')
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == "-" || arr[i] == "_") {
            arr.splice(i, 1)
            let next = arr[i]
            arr.splice(i, 1, next.toUpperCase())
        }
    }
    console.log(arr.join(''))
}


convertCase('the-stealth_warrior')