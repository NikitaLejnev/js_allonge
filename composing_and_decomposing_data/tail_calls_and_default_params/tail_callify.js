// we can push 1 + work into the call to length
let lengthDelaysWork = ([first, ...rest], numberToAdd) => 
    first === void 0
        ? 0 + numberToAdd
        : length(rest, 1 + numberToAdd)
// 1 + numberToAdd is evaluated before call
//
// let's get rid of having to call the function with 0
lengthDelaysWork = ([first, ...rest], numberToAdd) =>
    first === void 0
        ? numberToAdd
        : lengthDelaysWork(rest, 1 + numberToAdd)

length = (n) => lengthDelaysWork(n, 0);

console.log(lengthDelaysWork([1, 2, 3, 4, 5], 0))

// or using partial application
const callLast = (fn, ...args) =>
    (...remainingArgs) =>
    fn(...remainingArgs, ...args);

length = callLast(lengthDelaysWork, 0);

let mapWith = (fn, [first, ...rest]) =>
    first === void 0
        ? []
        : [fn(first), ...mapWith(fn, rest)];

console.log(mapWith((x) => x * x, [1, 2, 3, 4, 5]));
// let's optimize
const mapWithDelaysWork = (fn, [first, ...rest], prepend) =>
    first === void 0
        ? prepend
        : mapWithDelaysWork(fn, rest, [...prepend, fn(first)]);

mapWith = callLast(mapWithDelaysWork, []);

console.log(mapWith((x) => x * x, [1, 2, 3, 4, 5]));
// transforming a function into one that is tail-call optimized
// is a common pattern in languages with such optimization
