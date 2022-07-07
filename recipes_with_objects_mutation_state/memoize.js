// write a recursive fibonacci function
// we won't use a named function expression, for reasons explained later
const fibonacci = (n) =>
    n < 2
        ? n
        : fibonacci(n-2) + fibonacci(n-1)

// let's time it
s = (new Date()).getTime()
fibonacci(45)
console.log((new Date()).getTime() - s / 1000)
// 15 seconds!
// function recalculates the same results over and over again
// let's trade space for time
// we need a lookup table with the values calculated so far

const memoized = (fn) => {
    const lookupTable = {};

    return function (...args) {
        const key = JSON.stringify(this, args);

        return lookupTable[key] || (lookupTable[key] = fn.apply(this, args));
    }
}
// memoized is a function decorator
// it only works with idempotent functions

const fastFibonacci = memoized(
    (n) => n < 2
        ? n
        : fastFibonacci(n-2) + fastFibonacci(n-1)
)

console.log(fastFibonacci(45))
// we get the result very quickly
// it works with any function that take arguments transformed into JSON

// here is a variant for using custom string key evaluation
const memoizedCustom = (fn, keymaker = JSON.stringify) => {
    const lookupTable = {};

    return function (...args) {
        const key = keymaker.apply(this, args);

        return lookupTable[key] || (lookupTable[key] = fn.apply(this, args));
    }
}
