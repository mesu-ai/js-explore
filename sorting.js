
let alp = ['b', 'a', 'z', 'c', 't'];
const output = alp.sort();
console.log(output);

//other method

let age = [12, 45, 3, 6, 7, 8, 5, 3, 9, 55, 2];

function sorting(a, b) {
    return b - a;
}

const decending = age.sort(sorting);
console.log(decending[0]);

