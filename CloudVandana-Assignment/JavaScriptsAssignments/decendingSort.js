const numbers = [5, 2, 9, 1, 5, 6];

numbers.sort(function(a, b) { return b - a; }); //used custom comparison function

console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]