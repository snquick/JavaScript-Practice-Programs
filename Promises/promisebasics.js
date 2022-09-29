/* 
What is a promise? A Promise is a JavaScript object that links producing code and consuming code. It may produce a single value over time in the future. 
It has three states: fulfilled, rejected, or pending
Different between synchronous code and asynchronous code when using promises
*/
/*
How do you constructor a promise?
-- Example of a promise constructor
-- Example of using .then() in promise
-- Create a promise chain
-- Create a function that returns a promise which will resolve after a specified time delay
*/

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );