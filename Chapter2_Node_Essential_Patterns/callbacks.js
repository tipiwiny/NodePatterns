// Callback => Synchronous continuation-passing style

const add = (x,y, cb) => cb(x + y)
console.log('before');
add(1, 2, result => console.log(`Add ${result * 5}`));
console.log('after');

// Callback => Asynchronous continuation-passing style

const additionAsync = (a, b, callback) =>
  setTimeout(() => callback(a + b), 100);

console.log('before');
additionAsync(1, 2, result => console.log(`Result additionAsync ${result}`));
console.log('after');

//Callback => Non-continuation-passing style callbacks

const sumTotal = [2,5,6].reduce((acum, key) => acum + key)
console.log(`This is Synchronous ${sumTotal}``)
