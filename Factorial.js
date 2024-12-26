function factorialReduce(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    
    // Using reduce to calculate factorial
    return Array.from({ length: num }, (_, index) => index + 1).reduce((acc, val) => acc * val, 1);
}

// Function using for loop to calculate factorial
function factorialForLoop(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    
    // Using for loop to calculate factorial
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}