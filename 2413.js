//       2413. Smallest Even Multiple

var smallestEvenMultiple = function(n) {
    return n % 2 === 0 ? n : n * 2;
};


console.log(smallestEvenMultiple(5)); 
console.log(smallestEvenMultiple(6)); 
console.log(smallestEvenMultiple(7)); 
console.log(smallestEvenMultiple(10));
