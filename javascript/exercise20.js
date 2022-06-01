console.log('\nმაგალითი 20.');
const urls = ['https://www.facebook.com',
    'http://google.com',
    'mailto:example@gmail.com',
    'tel:599999999',
    'invalid url',
    'ftp://ftp01.com/html/',
    'http://example.com'
];

function starts(url) {
    if (url.startsWith('http')) {// return url.startsWith('http')? url: {} ვერ იმუშავა
        return (url);
    }
}

console.log("http-ზე დაწყებული ელემენტები:\n ",  urls.filter(starts)); // სვეტად არ ეწყობა.