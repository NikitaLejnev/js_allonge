const mapWith = (fn, [first, ...rest], prepend = []) =>
    first === undefined
    ? prepend
    : mapWith(fn, rest, [...prepend, fn(first)]);
// works in constant space
// still very slow on very large arrays

// under the hood, we call [...prepend, fn(first)], that is we take
// an array in prepend and push fn(first)
// that creates a new array for next invocation
// js engine copies prepend's elements one by one
//
// to sum up: slow because we create many temporary arrays and
// we copy elements into arrays later discarded by garbage collection
