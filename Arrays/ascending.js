/** Sort the given array of integers in ascending or descending order
 *  Sort method sorts the elements of an array in place and returns the sorted array
 *  It receives a function as an argument, which is used for comparision
 */

 const arr1 = ['a', 'c', 'z', 'f']; // array being used for function 

 // Descending order
 const descArr = arr1.sort().reverse();
 console.log(descArr); 

 // Ascending order
 const ascArr = arr1.sort();
 console.log(ascArr); 

 // Using a function for ascending
 function ascendingArray(arr1) {
    return arr1.sort();
 }

 console.log (ascendingArray(arr1))

 // Using a functin for descending
 function descendingArray(arr1) {
    return arr1.sort().reverse();
  }

  console.log (descendingArray(arr1))
