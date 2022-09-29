// ARRAYS -----
/**
 * Write a program to calculate the sum of all the values of an array

   Sum of the values of an array can calculated by iterating and adding all the values of the array
   reduce method of array can be used efficiently to calculate the sum with or without initial value
 */
arr = [1, 2, 6, 2, 1];

function calculatorArrays(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

console.log(calculatorArrays(arr));