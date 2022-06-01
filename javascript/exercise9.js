let max;
const array = [1, -3, 0, -8, 5, -7, -4, -6, -1, 49, -2];
function maximum(array){
    max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}
console.log(maximum(array));


