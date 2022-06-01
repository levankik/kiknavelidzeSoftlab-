const txt = 'JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. ' +
    'This tutorial will teach you JavaScript from basic to advanced.'
let occurrences = "";
let word;
let textSplit, textSplit1 = [];

function occurrence(text) {
    textSplit = text.split(/\s|\.\s/);
    while (textSplit.length !== 0) { // რომ ვწერდი აქ პირობას while (textSplit !== []), ჭედავდა პროგრამის გაშვებას
        word = textSplit[0];
        for (let i = 0; i < textSplit.length; i++) {
            if (word === textSplit[i]) {
                textSplit1.push(word);
                textSplit.splice(i, 1);
            }
        }
        occurrences += textSplit1[0] + ": " + textSplit1.length + "\n";
        textSplit1 = [];
    }
    return occurrences;
}

console.log('\nმაგალითი 16. სიტყვების შეხვედრების რაოდენობა სტრიქონში:\n', occurrence(txt));