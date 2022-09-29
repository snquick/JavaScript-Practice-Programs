//  Write a simple function to tell whether 2 is passed as parameter or not.

function getParam(param) {
    if (param !== undefined) {
      return param;
    }
  }
  
  console.log(getParam(10)); // 10
  console.log(getParam()); // undefined
  console.log(getParam("cat")); // cat