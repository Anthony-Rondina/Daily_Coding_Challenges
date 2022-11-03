// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.



const dayOfTheWeek = (day, month, year) => {
    let a = new Date(year, month - 1, day).toString().substring(0, 3);
    let b = {
        Sun: "Sunday",
        Mon: "Monday",
        Tue: "Tuesday",
        Wed: "Wednesday",
        Thu: "Thursday",
        Fri: "Friday",
        Sat: "Saturday",
    };

    return b[a];
}

console.log(dayOfTheWeek(1, 10, 2020))