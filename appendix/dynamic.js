// caching

const addTo80 = (() => {
  const cache = {};

  return x => {
    if (x in cache) {
      console.log(`${x} in cache`);
      return cache[x];
    }

    console.log(`${x} not cached`);
    const val = x + 80;
    cache[x] = val;

    return val;
  };
})();

console.log("addTo80 5 :", addTo80(5));
console.log("addTo80 5 :", addTo80(5));
console.log("addTo80 1 :", addTo80(1));
console.log("addTo80 5 :", addTo80(5));
console.log("addTo80 1 :", addTo80(1));

// currying
const multiply = (a, b) => a * b;
let c = multiply(3, 5);
console.log("c", c);

const curriedMultiply = a => b => a * b;
c = curriedMultiply(3)(5);
console.log("c", c);

// utility fx
const multiplyBy5 = curriedMultiply(5);
console.log("10 multiplyBy5", multiplyBy5(10));
