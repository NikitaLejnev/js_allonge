// my attempts
let squareAll = ([first, ...rest]) => 
    first === void 0
        ? []
        : [first * first, ...squareAll(rest)]

const sumOf = ([first, ...rest]) => 
    first === void 0
        ? 0
        : first + sumOf(rest)

const arr = [1, 2, 3, 4, 5]

console.log(squareAll(arr))
console.log(sumOf(arr))

const mySumSquares = (arr) => sumOf(squareAll(arr))

console.log(mySumSquares(arr))

// OG way
const sumSquares = ([first, ...rest]) =>
    first === undefined
        ? 0
        : first * first + sumSquares(rest)
// two differences from previous ones
//  - we return 0 if we get a terminal case
//  - we add the square to the result of sumSquares for the rest

// let's rewrite mapWith so we can use sumSquares
const foldWith = (fn, terminalValue, [first, ...rest]) =>
    first === void 0
        ? terminalValue
        : fn(first, foldWith(fn, terminalValue, rest))

console.log(foldWith((number, rest) => number * number + rest, 0, arr))
// foldWith is a more abstract mapWith function

squareAll = (arr) => foldWith(
    (first, rest) => [first ** 2, ...rest],
    [],
    arr
)

console.log(squareAll(arr))

const mapWith = (fn, array) => foldWith(
    (first, rest) => [fn(first), ...rest],
    [],
    array
)

squareAll = (array) => mapWith((x) => x ** 2, array)

console.log(squareAll(arr))

const length = (array) => foldWith(
    (first, rest) => 1 + rest, 0, array
)
console.log(length(arr))