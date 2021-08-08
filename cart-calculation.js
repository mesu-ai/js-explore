let attaQuantity = 1;
let moydaQuantity = 2;
let riceQuantitt = 2;

function cart(attaQuantity, moydaQuantity, riceQuantitt) {
    let attakg = 40;
    let moydakg = 30;
    let ricekg = 50;

    const attaPrice = attakg * attaQuantity;
    const moydaPrice = moydaQuantity * moydakg;
    const ricePrice = riceQuantitt * ricekg;

    let total = attaPrice + moydaPrice + ricePrice;
    return total;

}
const totalPrice = cart(attaQuantity, moydaQuantity, riceQuantitt);
console.log('Total Price: ', totalPrice);
