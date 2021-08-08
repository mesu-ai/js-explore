// nth value

function fiboValue(n) {
    if (n == 0) {
        return 0;

    }
    if (n == 1) {
        return 1;
    }

    return fiboValue(n - 1) + fiboValue(n - 2);



}
const fibovalue = fiboValue(6);
console.log('fibo-value: ', fibovalue);




// fibo series

function fiboSeries(n) {
    if (n == 0) {
        return [0];

    } if (n == 1) {
        return [0, 1];
    }

    let fibo = fiboSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;

}
const fiboseries = fiboSeries(5);
console.log('fibo-series: ', fiboseries);