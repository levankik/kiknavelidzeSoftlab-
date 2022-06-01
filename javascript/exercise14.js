console.log('\nმაგალითი 14.\n');

function is_String(param) {
    return (typeof param === 'string');
}

console.log('სტრიქონის ტიპზე შემოწმება', is_String(555));
console.log("სტრიქონის ტიპზე შემოწმება", is_String("computer"));
console.log("სტრიქონის ტიპზე შემოწმება", is_String(new Date));
console.log("სტრიქონის ტიპზე შემოწმება", is_String(function () {
}));
console.log('სტრიქონის ტიპზე შემოწმება', is_String(3.14));
