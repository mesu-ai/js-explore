
function addElemnt(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        var element = number[i];
        sum = sum + element;

    }
    return sum;

}

function findMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (max < element) {
            max = element;

        } else {
            max = max;

        }


    }
    return max;

}

let number = [2, 4, 5, 6, 77, 8, 6, 4, 2, 4, 5, 9];

let result = addElemnt(number);
console.log('sum:', result);

let maxnum = findMax(number);
console.log('max: ', maxnum)
