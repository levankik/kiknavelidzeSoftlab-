let t = 0;
console.log('\nმაგალითი 23.\n თუ ეს მაგალითი გაეშვა, მაშინ წინა ამოცანა - setTimeout-ი დაკომენტარებულია და არ ეშვება')
setInterval(function () {
    (t < 10) ? console.log(new Date()) : clearInterval();
    t++
}, 5000);