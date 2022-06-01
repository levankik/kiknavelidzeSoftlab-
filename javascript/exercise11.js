console.log('\nმაგალითი 11.\n');
let string = "Fizz Buzz FizzBuss\n";
const hundred = [];
for (let i = 0; i < 101; i++) {
    hundred.push(i);
}
hundred.forEach(number => (number % 3 === 0 && number % 5 === 0) ? console.log(number + ' FizzBuzz \n') :
    (number % 3 === 0) ? console.log(number + ' Fizz \n') :
        (number % 5 === 0) ? console.log(number + ' Buzz \n') : console.log(number + ' \n'));

