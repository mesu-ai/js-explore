// inch to feet

function inchToFeet(inch) {
    let feet = inch / 12;
    return feet;

}

let inch = 144;
let result = inchToFeet(inch);
console.log(inch, 'inch =', result, 'ft');


// mile to km

function mileToKm(mile) {
    let km = mile * 1.61
    return km;
}

let mile = 5;
let km = mileToKm(mile);
console.log(mile, 'mile= ', km, 'km');