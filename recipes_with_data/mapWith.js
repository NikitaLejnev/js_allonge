// we can implement native .map method
const map = (list, fn) => list.map(fn)

// mapWith is a function decorator, which returns a mapping function
const mapWith = (fn) => (list) => list.map(fn);
// differences from map:
    // mapWith reverses the arguments
    // mapWith curries the function

const squaresOf = mapWith(n => n * n);
console.log(squaresOf([1,2,3,4,5]))
