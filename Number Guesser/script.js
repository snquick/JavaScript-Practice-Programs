const num = Math.ceil(Math.random() * 10);
console.log(num);
 const gnum = prompt('Guess a number between 1 and 10!');
 if (gnum == num)
   console.log('Matched');
  else
   console.log('Oops, not match a match. The number was '+gnum);
   