const quota = 'I love you';
//let output = quota[0];
let reverse = '';


// general
for (const element of quota) {
    reverse = element + reverse;


}
console.log(reverse);


// with function
function reverseQuota(quota) {
    let revers = '';
    for (const iterator of quota) {
        revers = iterator + revers;

    }
    return revers;

}
let result = reverseQuota(quota);
console.log(result);

