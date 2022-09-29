//  How do you check if an object is an array or not?
var arrayList  = [1,2,3];

function checkObject(arr) {

    // check if arr is array
    const result = Array.isArray(arr); // uses isArray method

    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }
    return result;

}

checkObject(arrayList); // different way to call a function
console.log(checkObject(arrayList));