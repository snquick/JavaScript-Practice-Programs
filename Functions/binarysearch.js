// Prompt: Write a function for searching JavaScript arrays with a binary search.
// What is a binary search?  A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// Predictions: Probably uses split, filter, and maybe sort methods for an array? First convert the string to an array by using split. 
// Then.. 

var items = [1, 2, 3, 4, 5, 7, 8, 9];

function binary_search(items, value) {
    return items.indexOf(value)
    
    }


console.log(binary_search(items, 1))
console.log(binary_search(items, 5))
