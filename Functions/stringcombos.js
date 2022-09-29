// Prompt: Write a JavaScript function that generates all combinations of a string
// Example 'dog' would be d, do, dog, o, og, g 
function stringCombos(str) {
    let combos = [];
    for (let i = 0; i < str.length; i++) { // stationary for loop - keeps the only one letter at a time
      //  console.log("Loop 1 - position: " + i + " | Letter: " + str[i]); 
        for (let j = i + 1; j < str.length + 1; j++) { // goes through each letter after the stationary loop holder
           // console.log("Loop 2 - position: " + j + " | Letter: " + str[j]);
            combos.push(str.slice(i, j));
        }
        console.log("******************")
    }
    return combos;
}
//console.log(stringCombos("thanksgiving"));


function combinations(str) {
    let combos = [];

    for (let i = 0; i < str.length; i++) {
        //console.log(str[i]);
        for(let j = i+1; j <str.length +1; j++) {
          //  console.log(str[j]);
            combos.push(str.slice(i,j));
        }
    }
    return combos;
}
console.log(combinations("hello"));