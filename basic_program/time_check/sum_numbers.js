let sum = 0
const calc=(n)=>{
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const n = 10; // Example input
console.time()
console.log(`The sum of numbers from 1 to ${n} is: ${calc(n)}`);
console.timeEnd()