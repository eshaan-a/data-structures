/* Sets */

// Create a new set
const set1 = new Set(); // {}

// Add items
set1.add(9); // {9}
set1.add('string'); // {9, 'string'}
const obj1 = { color: 'red', num: 5 };
set1.add(obj1); // {9, 'string', {color: 'red', num: 5}}

// Check if it has a certain item
const hasTheNumber9 = set1.has(9); // true
const hasTheStringDog = set1.has('dog'); // false

// Get the size
const sizeOfSet = set1.size; // 3

// Delete an item
set1.delete(obj1); // {9, 'string'}

// We cannot delete objects from it directly
const set2 = new Set();
set2.add(3); // {3}
set2.add({ color: 'blue' }); // {3, {color: 'blue'}}
set2.delete({ color: 'blue' });
console.log(set2); // {3, {color: 'blue'}}

// When we remove an object outside of the set, then the object still remains in the set
let obj2 = { color: 'green' };
set2.add(obj2); // {3, {color: 'blue'}, {color: 'green'}}
obj2 = null;
console.log(set2); // {3, {color: 'blue'}, {color: 'green'}}

/* Weakset */
const weakSet = new WeakSet(); // {}
const obj3 = { fruit: 'apple' };
const obj4 = { fruit: 'apple' };
weakSet.add(obj3); // {}
weakSet.add(obj4); // {}
let hasObj3 = weakSet.has(obj3); // true
let hasObj4 = weakSet.has(obj4); // true
weakSet.delete(obj3);
hasObj3 = weakSet.has(obj3); // false

// Another approach of declaring a weakset:
let obj5 = { animal: 'bear' };
let obj6 = { color: 'yellow' };
let obj7 = { pet: 'cat' };
const weakSet2 = new WeakSet([obj5, obj6, obj7]); // {}

// When an object is removed outside of a weakset, then it will be automatically removed by the weakset
let hasObj5 = weakSet2.has(obj5); // true
obj5 = null;
hasObj5 = weakSet2.has(obj5); // false
