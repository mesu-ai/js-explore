//swap number

let a = 5, b = 6;
console.log(a, b);

temp = a;
a = b;
b = temp;

console.log(a, b);

//destructure method

let x = 4, y = 5;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);