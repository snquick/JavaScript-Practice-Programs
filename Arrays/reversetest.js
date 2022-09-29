function reverseNum(x) {
    x = x.toString(); // converting num to string so i can reverse it
    return x.split('').reverse().join('');

}

console.log(Number(reverseNum(23)));
