// Prompt: Write a JavaScript function that generates a string id of random characters (specificed length) 
// Steps: create variables to hold what type of chars can be used in the idea, the result (empty), and the length
// for loop up this bitch :D 

function makeRandomID(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for(var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeRandomID(3));
console.log(makeRandomID(7));
console.log(makeRandomID(111));
