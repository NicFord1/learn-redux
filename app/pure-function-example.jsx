console.log('Starting Pure Function Example');

// Pure Function
//  Always return the same thing
//  No side effects
//  No asynchronous requests (no promises or callback)
function add(a, b) {
  return a + b;
}

// Unpure - use of outside variable
var a = 3;
function add(b) {
  return a + b;
}

// Unpure - side effect (changes outside scope)
var result;
function add(a, b) {
  result = a + b;
  return result;
}

// Unpure - returns different under certain conditions
function add(a, b) {
  return a + b + new Date().getSeconds();
}

// Pure vs Unpure
var startingValue = {
  name: 'Nicholas',
  age: 31
};
console.log('startingValue: ', startingValue);

// Unpure - update passed in variable
function changePropUnpure(obj) {
  obj.name = 'Veronica';
  return obj;
}

var res = changePropUnpure({
  ...startingValue
});
console.log('changePropUnpure(startingValue): startingValue: ', res);

// Pure - return copy
function changeProp(obj) {
  return {
    ...obj,
    name: 'Veronika'
  }
}

console.log('changeProp(startingValue): ', changeProp(startingValue));
console.log('changeProp(startingValue): startingValue: ', startingValue);
