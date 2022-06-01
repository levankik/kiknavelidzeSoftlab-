console.log('\nმაგალითი 19.');
const textLorIps = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
    'tempor incididunt ut labore et dolore magna aliqua.'
let LorIps = '';

function replacement(text) {
    LorIps = text.replace(/dolor|elit|labore/gi, "xxx");
    return LorIps;
}

console.log(replacement(textLorIps));
