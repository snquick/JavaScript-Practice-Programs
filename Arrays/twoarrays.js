// COLLECTIONS ------------
/**
 * Write a function which can concatenate 2 arrays. If only one array is passed it will duplicate it
 
    Function can take 2 arguments which concatenates arrays
    2nd array parameter can be defaulted to 1st array if the value is not passed
 */

function combineArrays(arr1, arr2) {
    let newArray = arr1.concat(...arr2);
    return newArray;
}

const seaAnimals = ['fish', 'shark', 'nemo'];
const landAnimals = ['mammal', 'lion', 'tiger'];

console.log(combineArrays(seaAnimals, landAnimals));


 