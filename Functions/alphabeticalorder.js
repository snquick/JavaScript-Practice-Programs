// Prompt: Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example: string - webmaster --> abeemrstw
function alphaOrder(str) {
    return str.split('').sort().join('');
}

console.log(alphaOrder("webmaster"));


// Function Name: alphaOrder
// Steps: split the string, sort, join
// test case to finish

// function -- alphaOrder parameters -- string 
// goal: reorder string into alpha. order
// divide string into separate elements (chars) then we would sort it alpha. --> rejoin and return it

function alphaOrder(str) {
    str = str.split('').sort().join('');
    return str;
}

console.log(alphaOrder("chicken nuggets"));

function alphaOrder(str) {
    str = str.split('').sort().join(''); // splitting the string into separate elements, sorting them into alpha. sort, then rejoining them so they will be pritned together as a string
    return str; // return it 
}

console.log(alphaOrder("penguin"))