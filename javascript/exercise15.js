console.log('\nმაგალითი 15.\n');

function question(param) {
    if (typeof param !== 'string') {
        throw new Error("შეყვანილი პარამეტრი არასტრიქონულია");
    }
    return param.includes('?') ? 'true' : 'false';
}

console.log(question('soft?'));
console.log(question('soft'));
console.log(question('555'));
//console.log(question(555)) // აქ ისვრის შეცდომას
