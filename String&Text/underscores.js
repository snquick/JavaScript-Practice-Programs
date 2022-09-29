// Write a code to replace all the spaces of the string with underscores

// The string can be split using the space character and can be joined back with underscore to replace all the spaces with strings
// replaceAll is the inbuilt String function on prototype which can be used to replace a string with another string

function changeSpaces(str) {
    str = str.replaceAll(/ /gi, '_');
    return str;
}

let str = "hello world my name is stephanie and today is beautiful outside";
console.log(changeSpaces(str))