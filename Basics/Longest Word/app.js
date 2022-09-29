function longestWord(str) {
    let words = str.split(' ');
    let longestWord = "";

    for (word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(longestWord("I woke up early yesterday"));
console.log(longestWord("I went straight to the beach"));