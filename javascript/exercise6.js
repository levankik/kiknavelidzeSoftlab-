console.log('\nმაგალითი 6. \nfilter() და reduce() მეთოდები, მასივის არანულოვანი ელემენტების აბსოლუტური მნიშვნელობების ნამრავლი: '
    + numbers1.filter(number => number !== 0)
        .reduce((number, total) => Math.abs(total * number), 1));
console.log('filter(), reduce() და map() მეთოდები, მასივის არანულოვანი ელემენტების აბსოლუტური მნიშვნელობების ნამრავლი: '
    + numbers1.filter(number => number !== 0)
        .map(number => Math.abs(number))
        .reduce((number, total) => total * number, 1));

