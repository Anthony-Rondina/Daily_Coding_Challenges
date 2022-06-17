//Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var generate = function (numRows) {
    let output = [[1]];
    for (let i = 0; i < numRows - 1; i++) {
        let check = output[output.length - 1];
        let row = [1];
        for (let j = 1; j < check.length; j++) {
            row.push(check[j] + check[j - 1])
        }
        row.push(1);
        output.push(row);
    }
    return output;
};

console.log(generate(5))