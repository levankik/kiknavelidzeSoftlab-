const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log("მაგალითი 1.\nfilter() მეთოდი, ლუწი რიცხვები: ", numbers.filter(number => number % 2 === 0));

console.log("forEach() მეთოდი, ლუწი რიცხვები: ");
numbers.forEach(number => (number % 2 === 0) ? console.log(number) : {});

