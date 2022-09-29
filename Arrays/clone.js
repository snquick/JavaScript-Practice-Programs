// Prompt: Write a JavaScript function to clone an array.

let original = ["banana", "peach", "cherries"];

// slice method
var copy1 = original.slice(0);

// spread operator
var copy2 = [...original];
console.log(copy1, copy2);

// DEEP copying -- all values of the new variable are copied and dced from original value
var deepArray = [["fruit salad"]];
var shallowCopy = deepArray.slice(0); 
// whenever you have an array within an aray, its just a pointer to an obj or array inside the original

// Shallow copy -- certain sub-values are still connected to original vlaue (both of these are ways data is stored)
shallowCopy[0].push("fruit dessert");
console.log(deepArray[0], shallowCopy[0]);


// w3schools method with function
// anonymous function -- to be used when you want to control which fucntions are exposed
var array_Clone = function(arra1) { // no function name -- instead using the variable 
    return arra1.slice(0);
       };
   console.log(array_Clone([1, 2, 4, 0]));
   console.log(array_Clone([1, 2, [4, 0]]));


// regular function 
function cloneArray(arra1) {
    return arra1.slice(0);
}
console.log(cloneArray([9, 7, 2, 5]));
console.log(cloneArray([1, 2, [4, 0]]));

// arrow function 
cloneArray2 = (arra1) => {
    return arra1.slice(0);
}
console.log(cloneArray2(["mining", "farming", "fishing", "woodcutting"]));
console.log(cloneArray2(["cucumber", "cauliflower", "squash"]));