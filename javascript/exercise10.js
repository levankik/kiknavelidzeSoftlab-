const upFifteen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('\nმაგალითი 10.\n');
console.log('ლუწი და კენტი რიცხვები 0-დან 15-მდე: \n');
upFifteen.forEach(number => number % 2 === 0 ? console.log(number + ' არის ლუწი \n') : console.log(number + ' არის კენტი \n'));
