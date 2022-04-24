const myArray = [1, 3, 5, 7, 9];

// map
const myArray2 = myArray.map(i => i + 1);
const myArray3 = myArray.map(i => "x");
console.log(myArray);
console.log(myArray2);
console.log(myArray3);

// filter
let filter = myArray.filter(i => i > 4);
console.log(" > 4:", filter);
filter = myArray.filter(i => true);
console.log("true:", filter);
filter = myArray.filter(i => false);
console.log("false:", filter);

// includes
let include = myArray.includes(3);
console.log("includes 3:", include);
include = myArray.includes(10);
console.log("includes 10:", include);

let newArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
include = newArray.includes(2, 3);
console.log("includes 2, 3:", include);
include = newArray.includes(2, 1);
console.log("includes 2, 1:", include);

// find
let found = myArray.find(i => i === 5);
console.log("find 5:", found);
const people = [{ id: 1 }, { id: 4 }, { id: 5 }];
found = people.find(p => p.id === 4);
console.log("find 4:", found);

// reduce
const array = [1, 2, 3, 4, 5];
let sum = array.reduce((acc, cur) => acc + cur, 0);
console.log("reduce:", sum);
sum = array.reduce((acc, cur) => acc + cur, 10);
console.log("reduce from 10:", sum);
