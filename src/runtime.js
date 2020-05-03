const runtime = require('../test/test');

const isPrime = num => {
    if (num < 2) {
        return false
    }
    for (let i = 2; i < Math.round(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(runtime.memoryUsage(isPrime(11)))
console.log(runtime.executionTime(isPrime(11)))