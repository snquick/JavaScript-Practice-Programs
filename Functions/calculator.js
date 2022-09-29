// Design a Calulator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface

// Example
const calc12And5 = Calculator(12, 5);

function calc12And5(x,y) {
    sum = x + y;
    return sum;
}


calc12And5.sum();                       // 17
calc12And5.difference();                // 7
calc12And5.product();                   // 60
calc12And5.dividend();                  // 2


