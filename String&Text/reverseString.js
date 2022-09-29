// strings ----
// Write a program to reverse a string
const str = "JavaScript is Awesome";

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(str));