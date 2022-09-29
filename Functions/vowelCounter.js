// Prompt: Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string

function vowelCounter(str) {
    let matchingVowel = str.match(/[aieou]/gi);
    return matchingVowel === null ? 0 : matchingVowel.length;
    // ? is an operator that says if something is true or false

}
 
console.log(vowelCounter('apple'));