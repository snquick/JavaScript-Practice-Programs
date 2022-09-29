// Prompt: Reversing a number

function ReverseNum(x) {
    // Before I can reverse a number, we have to treat the number like a string so we must convert x to a string.
    // Instead of doing toString, I can also do x = x + ""; 
    x = x.toString();

    // After converting to a string, then you have to split each element separately into substrings, reverse the order (first element becomes last),
    // and rejoin the string again by using the join method
    return x.split("").reverse().join("");
}

console.log(Number(ReverseNum(31057))); 