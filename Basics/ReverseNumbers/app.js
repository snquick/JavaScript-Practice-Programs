function reverseNumber(num) {
    num = num + "";
    return num.split("").reverse().join("");
}

console.log(Number(reverseNumber(42065)));