function evenOddCheck(number) {
    if (number % 2 == 0) {
        // let even = console.log(number, ' is a Even Number.');
        let even = 'Even Number';
        return even;

    } else {

        let odd = 'Odd Number';
        return odd;

    }

}

let check = 111;
var result = evenOddCheck(check);
console.log(check, ' is a', result);


