var mySet = new Set();

mySet.add(1); // Set { 1 }
console.log(mySet);
mySet.add(5); // Set { 1, 5 }
console.log(mySet);
mySet.add(5); // Set { 1, 5 }
console.log(mySet);
mySet.add('some text'); // Set { 1, 5, 'some text' }
console.log(mySet);
var o = {a: 1, b: 2};
mySet.add(o);
console.log(mySet);
mySet.add({a: 1, b: 2}); // o is referencing a different object so this is okay
console.log(mySet);

console.log(mySet.has(1));
console.log("size:",mySet.size);

console.log(mySet.has({a: 1, b: 2}));
console.log(mySet.has(o));

for (let item of mySet) {
    console.log(item);
}