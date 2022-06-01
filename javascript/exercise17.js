console.log('\nმაგალითი 17.');
let len, truth;
let strPal;

function Pal(string) {
    truth = "true";
    strPal = string.split("");
    len = strPal.length;
    for (let i = 0; i < len - i; i++) {
        if (strPal[i] !== strPal[len - 1 - i]) {
            truth = "false";
            break;
        }
    }
    return truth;
}

console.log('პალინდრომობაზე შემოწმების შედეგი: ', Pal('ABBAA'));
console.log('პალინდრომობაზე შემოწმების შედეგი: ', Pal('ABBA'));
