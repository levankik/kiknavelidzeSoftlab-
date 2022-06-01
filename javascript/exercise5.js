const numbers1 = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
console.log('\nმაგალითი 5. \nfilter() და reduce() მეთოდები, მასივის დადებითი ელემენტების ჯამი: '
    + numbers1
        .filter(number => number > 0)
        .reduce((number, total) => total + number, 0)
)

