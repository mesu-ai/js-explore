
function factorial(n) {

    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);

}
let number = 5;
let result = factorial(number);
console.log(result);