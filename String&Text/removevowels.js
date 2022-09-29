// Write a code to remove all the vowels from a given string
// replace* method on String accepts a string or regex as the argument

function removesVowels(str) {
    return str.replace(/[aeiou]/gi, '');

}

const test = 'hello world';
console.log(removesVowels(test));
