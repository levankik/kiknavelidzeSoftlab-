let n, m, k;
let natArray = []; // აქ let-ად ვაცხადებ, რადგანაც natArray-ს 13.1-შიც ვიყენებ
function natNumber(i) { // რიცხვის შემოწმება სიმარტივეზე
    k = i;
    for (let j = 2; j < Math.trunc(i / 2) + 1; j++) {
        if (i % j === 0) {
            k = 0;
            break;
        }
    }
    return k;
}

function natNumbers(number) { // პარამეტრით მითითებულ რიცხვამდე არსებული მარტივი რიცხვები
    for (let i = 0; i < number + 1; i++) {
        m = natNumber(i);
        (m !== 0) ? natArray.push(m) : {};
    }
    return natArray;
}

console.log('\nმაგალითი 13. ნატურალური რიცხვები\n', natNumbers(100) + '\n');

natArray = [];
let newNumber;
let natNumb = natNumbers(500);
console.log('\nმაგალითი 13.1. ნატურალური რიცხვები ციფრთა უკუთანმიმდევრობით');
natNumb.map(number => {
        newNumber = 0;
        while (number >= 1) {
            newNumber *= 10;
            newNumber += number % 10;
            number = Math.floor(number / 10);
        }
        console.log(newNumber);
    }
)
