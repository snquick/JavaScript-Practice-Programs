// How to empty an array in JavaScript? Show two methods
// show two methods

arr1 = [1, 2, 4, 5];
arr2 = ['a', 'b', 'c', 'd'];

function emptyArray1(arr1) {
    arr1.length = 0;
    return arr1;
}

function emptyArray2(arr2) {
    while(arr2.length > 0) {
        arr2.pop();
    }  
    return arr2;
}

console.log(emptyArray1(arr1));
console.log(emptyArray2(arr2));