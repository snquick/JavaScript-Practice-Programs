

function hasLetters(str, arr) {
    arr.some(element => {
        if(str.includes(element)) {
            return true;
        }
        return false;
    });
}    

const str = 'hello world';
const arr = ['one', 'two', 'hello'];
console.log(hasLetters(str, arr));