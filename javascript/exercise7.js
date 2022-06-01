const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
console.log('\nმაგალითი 7.\n' + text + ' ტექსტის სიტყვების პირველი ასოებისგან შემდგარი მთავრული სტრიქონი:\n'
    + text
        .split(/\s|,\s|\./)
        .map(word => word.charAt(0))
        .reduceRight((letter, string) => string + letter, " ")
        .toUpperCase());
