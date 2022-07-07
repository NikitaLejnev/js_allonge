// let's see what happens if we use a named functional expression
var fibonacci = function fibonacci(n) {
    if (n < 2) {
        return n
    } else {
        return fibonacci(n-2) + fibonacci(n-1)
    }
}

const memoized = (fn) => {
    const lookupTable = {};

    return function (...args) {
        const key = JSON.stringify(this, args);

        return lookupTable[key] || (lookupTable[key] = fn.apply(this, args));
    }
}

var memoFib = memoized( function fibonacci (n) {
    if (n < 2) {
        return n
    } else {
        return fibonacci(n-2) + fibonacci(n-1)
    }
});

console.log(memoFib(45))
// why is it slow?
// we memoized the function bound to fibonacci in the OUTER environment
// named functional expression binds name INSIDE the function