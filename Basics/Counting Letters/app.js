// Developer: Stephanie Quick
// Program: Coding Challenge - Array of Letters 

function hasLetters(str, arr) {
    const contains = arr.every(element =>  {
        if (str.includes(element)) { // checks to see if string contains all letters from the array
            return true;
        }
     })    
    return contains;
 }
 const word = "fish";
 const letters = ['f', 'i', 's', 'h'];

 console.log(hasLetters(word, letters));