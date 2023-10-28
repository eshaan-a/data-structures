/* Maps */
const map1 = new Map(); // {}
map1.set('color', 'red');
map1.set({ obj: 'an object' }, true);
map1.set(1, 'number');

console.log(map1); //  {'color' => 'red', { obj: 'an object' } => true, 1 => 'number'}

map1.delete('color');
console.log(map1); // {{ obj: 'an object' } => true, 1 => 'number'}

const hasKey1 = map1.has(1); // true
const getValueOfKey1 = map1.get(1); // 'number'

console.log(getValueOfKey1);

/* Weakmap */
const weakMap = new WeakMap(); // {}
const obj1 = { color: 'black' };
const obj2 = {};
weakMap.set(obj1, 'dark'); // {}
weakMap.set(obj2, 12); // {}

const hasTheValue12 = weakMap.has(obj2); // true
const getTheValue = weakMap.get(obj1); // 'dark'

weakMap.delete(obj1);
const hasTheValueDark = weakMap.has(obj1); // false
