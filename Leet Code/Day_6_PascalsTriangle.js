//Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var generate = function (numRows) {
    //Initiate output with data
    let output = [[1]];
    // create for loop to loop the number of times the user puts in function call
    for (let i = 0; i < numRows - 1; i++) {
        //Create check to loop through previous row
        let check = output[output.length - 1];
        //create new row starting with 1
        let row = [1];
        //create another for loop to add previous row's numbers to new array
        for (let j = 1; j < check.length; j++) {
            row.push(check[j] + check[j - 1])
        }
        //complete the row by adding a 1
        row.push(1);
        //push completed row to output
        output.push(row);
    }
    return output;
};

console.log(generate(5))