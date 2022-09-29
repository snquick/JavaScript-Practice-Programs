// Prompt: Checks whether a passed string is a palindrome or not
// What is a palindrome? A word or phrase that reads the same backward as forward


function palindromeExercise(str) {
    const original = str;
    const reverseStr = original.split("").reverse().join("");
    return reverseStr == original;
}

console.log(palindromeExercise("madam"));
console.log(palindromeExercise("dafadf"));
