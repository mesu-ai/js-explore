function removeDublicate(array) {
    let name = [];
    for (const element of array) {

        if (name.indexOf(element) == -1) {
            name.push(element);

        }

    }
    return name;



}

let fname = ['sodu', 'modu', 'kodu', 'jodu', 'todu', 'sodu', 'kodu', 'cadu', 'sodu']
const result = removeDublicate(fname);
console.log(result);