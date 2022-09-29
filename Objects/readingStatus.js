// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

// map -- creates a new array and holds the object props in that array
console.log(library.map(value => value.readingStatus)); 
