const squareAll = ([first, ...rest]) =>
    first === void 0
        ? []
        : [first * first, ...squareAll(rest)]

console.log(squareAll([1, 2, 3, 4, 5]))

const truthyAll = ([first, ...rest]) =>
    first === undefined
        ? []
        : [Boolean(first), ...truthyAll(rest)]

console.log(truthyAll([null, true, 33, false, undefined]))
// this pattern of linear recursion is called "mapping"
const map = (fn, [first, ...rest]) =>
    first === undefined
        ? []
        : [fn(first), ...map(fn, rest)]

console.log(map((x) => x * x, [1, 2, 3, 4, 5]))
