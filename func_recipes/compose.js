// B Combinator
let compose = (a, b) =>
    (c) => a(b(c))

const addOne = (number) => number + 1;
const doubleOf = (number) => number * 2;

let doubleOfAddOne = (number) => doubleOf(addOne(number));

// using compose
doubleOfAddOne = compose(doubleOf, addOne);

let compose3 = (a, b, c) => (d) => a(b(c(d)))
// if we abstract
compose3 = (a, b, c) => compose(a, (compose(b, c)))

// how to write recursive compose?
// let's start with degenerate case - the smallest one
compose = (a) => a
// next break a piece off the problem
// what about a variadic function?
compose = (a, ...rest) =>
// test if we have a degenerate case
    rest.length === 0
        ? a
// if it it's not, then combine what we have
// with the solution for the rest

// take compose(a, b)
// compose(b) is a degenerate case
// compose(a, b) is (c) => a(b(c))
// compose(a, compose(b)) === (c) => a(compose(b)(c))
// replace b with ...rest
// compose(a, compose(...rest)) === (c) => a(compose(...rest)(c))
        : (c) => a(compose(...rest)(c))

// implement using reduce()
compose = (...fns) =>
    (value) => fns
        .reverse()
        .reduce((acc, fn) => fn(acc), value);

// method decorators work great with B Combinator
const setter = compose(fluent, maybe);

// ...

Class.prototype.setUser = setter(function (user) {
    this.user = user
})
// compose when you need a new function with effects of existing ones
