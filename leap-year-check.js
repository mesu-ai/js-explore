function leapYear(year) {

    if (year % 400 == 0) {
        const result = 'Leap Year';
        return result;

    }

    else if (year % 100 == 0) {
        const result = 'Not Leap Year';
        return result;
    }

    else if (year % 4 == 0) {
        const result = 'Leap Year';
        return result;
    }

    else {
        const result = 'Not Leap Year';
        return result;
    }
}

let year = 2100;
let result = leapYear(year);
console.log(year, ' is a - ', result);