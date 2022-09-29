let selectedColors = ['red', 'yellow']; // array literal
selectedColors[2] = 'green';

console.log(selectedColors[0]);
console.log(selectedColors);
console.log(selectedColors.length);

// performing a task
function greet(myName, lastName) {
    console.log('Hello, ' + myName + ' ' + lastName);
}

greet('Stephanie', 'Quick');
greet('Jenna');

// Calculating a value
function square(number) { 
    return number * number;
}

console.log(square(2));