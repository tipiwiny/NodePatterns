// let , const, var => SCOPE
if (false) {
     var x = "javascript";
  }
console.log(x);

/*if (false) {
    let y = "javascript";
  }
console.log(y);

const a = 'This will never change';
a = '...';
*/

// arrow function => the scope of this is the previos bracket

const arrowF = (x) => x*2
console.log(arrowF(4))

function HelloDelayed(name) {
  this.name = name;
}
HelloDelayed.prototype.greet = function() {
  setTimeout(function cb() {
   console.log('Hello ' + this.name);
  }, 123);
};
const greeter = new HelloDelayed('World');
greeter.greet() // will print "Hello undefined"

function HelloDelayedBinding(name) {
  this.name = name;
}
HelloDelayedBinding.prototype.greet = function() {
  setTimeout( (function cb() {
    console.log('Hello ' + this.name);
  }).bind(this), 123);
};
const greeterBinding = new HelloDelayedBinding('World');
greeterBinding.greet()


function HelloDelayedArrowF(name) {
 this.name = name;
}
HelloDelayedArrowF.prototype.greet = function() {
  setTimeout(() => {
  console.log('Hello ' + this.name);
  }, 123);
};
const greeterArrowF = new HelloDelayedArrowF('World');
greeterArrowF.greet()


// class syntax

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

let cp = new ColorPoint(25, 8, 'green');
cp.toString(); // '(25, 8) in green'

console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point);


// Enhanced object literals

const first = 'Hello';
const second = 'Word'

const obj = {first, second};


const vehicle = {
  type: 'car',
  color: 'red',
  get getColor() {
    return this.color;
  },
  set setColor(newColor) {
    this.color = newColor;
  }
}
console.log('VEHICLE',vehicle.getColor);
console.log('VEHICLE',vehicle.setColor = 'green');
console.log('VEHICLE',vehicle.getColor);

// MAP AND SET COLLECTIONS

const carMap = new Map();
carMap.set('Ford', '3');
carMap.set('Audi', '4');
carMap.set('KIA', '2');
console.log('Size', carMap.size);
console.log('Audi', carMap.get('Audi'));
console.log('KIA', carMap.has('KIA'));
console.log('KIA', carMap.delete('KIA'));
console.log('KIA', carMap.has('KIA'));
console.log('KIA', carMap.get('KIA'));
for (const entry of carMap) {
    console.log(typeof entry)
    console.log(entry);
}

const s = new Set([0, 1, 2, 3]);
  s.add(3); // will not be added
  s.size; // 4
  s.delete(0);
  s.has(0); // false
  for (const entry of s) {
    console.log(entry);
}

//Template literals

const hola= 'Hola';

console.log(`${hola} mundo`);


/* More ES6 FEATURES

Default function parameters
Rest parameters
Spread operator Destructuring
new.target
Proxy
Reflect
Symbols
*/
