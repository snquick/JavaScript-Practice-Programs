function mathSequences(arr) {
    let arith = [];
    let geo = [];

    for(let i =1; i<arr.length; i++) {
        let firstNumber = arr[i] - arr[i-1];
        arith.push(firstNumber);

        let secondNumber = arr[i] / arr[i-1];
        geo.push(secondNumber);
    }

console.log(`A : ${arith}`);
console.log(`G : ${geo}`);

    //return arr;
}


// Arimthmetic
console.log(mathSequences([2, 4, 6, 8]));
// Geometric
console.log(mathSequences([3, 9, 27]));
// No Pattern
console.log(mathSequences([2, 5, 14, 89]));