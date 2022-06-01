console.log('\nმაგალითი 18.');
const toJoin = ['ერთი', 'ორი', 'სამი', 'ოთხი', 'ხუთი'];
let ar;

function merge() {
    ar = toJoin.join();
    return (ar);
}

console.log('მასივის ელემენტების შერწყმა სტრიქონად: ', merge(toJoin));