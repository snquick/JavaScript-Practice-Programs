// Prompt: Write a JavaScript function to  get the number of occurrences of each letter in specified string

function numbersOfLettersHo(str) {
    var uchars = {};
    str.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
    return uchars;}

console.log(numbersOfLettersHo("banananas"));