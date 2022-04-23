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
