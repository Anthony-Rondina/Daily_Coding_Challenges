// Day 1 Problem:
// Loop over an array of bank accounts and find the total of each account and return the account with the highest Number.

const maximumWealth = (arr) => {
    let total = 0;

    // arr we looking at all accounts in the array 
    //accounts is looking at indvidual bank account 
    arr.forEach((accounts) => {
        // let subtotal is being scoped so we can have each indvidual account to casue sperations.
        let subTotal = 0;
        //numbers are each number in the arrary for each indvidual person 
        accounts.forEach((number) => {
            // console.log("number is", number);
            subTotal += number
            // console.log("subtotal is", subTotal);
            if (subTotal >= total) {
                total = subTotal
            }
        })
    })
    return total
};



//   ------------------------------------------------