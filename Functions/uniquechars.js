// Prompt: Write a JavaScript function to extract unique characters from a string

function uniqueChars(str) {
    // whenever you need to extra specific characters in a string, always split it into an array by using split!
    str = str.split(""); // split with a space :D 
    
    // In this instance, we would now create a set using our new array
    // Set: A collection of unique values (each value can only occur once in a set which is perfect for this exercise)
    str = new Set(str);

    // Since we now have only the unique chars of the string, we can convert it back to an array and then a string again
    // Using the spread operator which allows us to quickly copy all parts of an existing array/object into a different one. 
    str = [...str].join("");

    return str;
}

console.log(uniqueChars("banananas"));
console.log(uniqueChars("Say Yes to le dress")); // as you can see it doesnt work for letters that are different sizes (upper, lowercase)