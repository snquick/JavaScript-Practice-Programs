function capitalizeWords(str) {
    let words = str.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return words.join(" ");
}

console.log(capitalizeWords("the sheep woke up early and ate some hay"));