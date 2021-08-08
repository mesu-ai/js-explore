let phones = [
    { name: 'poco f1', brand: 'xaomi', price: 25000, ram: 6, storage: 64 },
    { name: 'note 7 pro', brand: 'xaomi', price: 20000, ram: 4, storage: 64 },
    { name: 'tecno xr', brand: 'tecno', price: 8000, ram: 3, storage: 32 },
    { name: 'm10', brand: 'samsung', price: 6500, ram: 3, storage: 32 },
    { name: 'm21', brand: 'samsung', price: 17000, ram: 8, storage: 128 },

    // { name: 'symphony m20', brand: 'symphony', price: 6500, ram: 3, storage: 32 }

];

let cheapest = phones[0];

for (const mobile of phones) {
    if (mobile.price < cheapest.price) {
        cheapest = mobile;
    }
}
console.log(cheapest);