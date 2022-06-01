console.log("\nმაგალითი 2.filter() და map() მეთოდები, კენტი რიცხვების კვადრატები: ", numbers
    .filter(number => number % 2 !== 0)
    .map(value => Math
        .pow(value, 2)));
console.log("forEach() მეთოდი, კენტი რიცხვების კვადრატები: ");
numbers.forEach(number => (number % 2 !== 0) ? console.log(Math.pow(number, 2)) : {});
