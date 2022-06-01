let star = ' ';
let starString = '';

function stars() {
    for (let i = 0; i < 10; i++) // ჩადგმული ციკლი ამას არ ჰქვია, მგონი.
    {
        star += '* ';
        starString += star + '\n';
    }
    return starString;
}

console.log('\nმაგალითი 12. ვარსკვლავები\n' + stars());
