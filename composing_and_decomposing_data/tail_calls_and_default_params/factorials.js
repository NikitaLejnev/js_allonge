// naive
let factorial = (n) =>
    n === 1
    ? n
    : n * factorial(n - 1);

const factorialWithDelayedWork = (n, work) =>
    n === 1
    ? work
    : factorialWithDelayedWork(n - 1, work)

factorial = (n) => factorialWithDelayedWork(n, 1)

// partial application

const callLast = (fn, ...args) =>
    (...remainingArgs) =>
        fn(...remainingArgs, ...args);

factorial = callLast(factorialWithDelayedWork, 1);
