let factorial = (n, work) =>
    n === 1
    ? work
    : factorial(n - 1, work);

factorial(1, 1)
factorial(5, 1)
// do we really have to pass 1 always?

factorial = (n, work = 1) =>
    n === 1
    ? work
    : factorial(n - 1, n * work);
// now we don't

// let's rewrite length
const length = ([first, ...rest], numberToAdd = 0) =>
    first === undefined
        ? numberToAdd
        : length(rest, numberToAdd + 1)

// and mapWith
const mapWith = (fn, [first, ...rest], prepend = []) =>
    first === undefined
    ? prepend
    : mapWith(fn, rest, [ ...prepend, fn(first)])