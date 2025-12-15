let sum = 0
const calc=(n)=>{
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const memoize=(fun)=>{
    let cache = {};
    return function(...args) {
        let n = args[0];
        if (n in cache) {
            console.log(`Fetching from cache for ${n}`);
            return cache[n];
        } else {
            console.log(`Calculating result for ${n}`);
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}
const n = 10; // Example input
console.time()
const efficient = memoize(calc);
console.log(`The sum of numbers from 1 to ${n} is: ${efficient(n)}`);
console.timeEnd()

