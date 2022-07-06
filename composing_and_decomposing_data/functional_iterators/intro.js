// find the sum of array elements
const sum = ([x, ...xs], acc = 0) =>
    x === undefined
        ? acc
        : sum(xs, x + acc);

// let's separate traversing from summing by using fold
const callLeft = (f, ...args) =>
    (...remainingArgs) =>
        f(...args, ...remainingArgs);

const foldArrayWith = (f, z, [x, ...xs]) =>
    x === undefined
        ? z
        : f(x, foldArrayWith(f, z, xs))

const arraySum = callLeft(foldArrayWith, (a, b) => a + b, 0);

console.log(arraySum([1, 4, 9, 16, 25]))
// arraySum is concerned with summing
// however it relies on foldArrayWith, so only arrays can be summed

const callRight = (f, ...args) =>
    (...remainingArgs) =>
        f(...remainingArgs, ...args);

const foldArray = (as) => callRight(foldArrayWith, as)
const sumFoldable = (f) => f((a, b) => a + b, 0);

console.log(sumFoldable(foldArray([1, 4, 9, 16, 25])))
// we've turned the array into a function which folds an array
// any foldable data structure can be passed

const foldTreeWith = (f, z, [x, ...xs]) =>
    x === undefined
        ? z
        : Array.isArray(x)
            ? f(foldTreeWith(f, z, x), foldTreeWith(f, z, xs))
            : f(x, foldTreeWith(f, z, xs))

const foldTree = (tree) => callRight(foldTreeWith, tree);

console.log(sumFoldable(foldTree([1, [4, [9, 16]], 25])))
// we have separated folding logic from summing logic