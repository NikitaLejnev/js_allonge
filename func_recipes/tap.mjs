// K Combinator, a.k.a. Kestrel
const K = (x) => (y) => x;

// Function always returns its argument
// If you pass it another function, it executes that function
// for side effects
const tap = (value) =>
    (fn) => (
        typeof(fn) === 'function' && fn(value),
        value
    )
// Name 'tap' comes from Unix shell commands

tap('espresso')((it) => {
    console.log(`Our drink is '${it}'`)
});

// Underscore provides uncurried version
import _ from 'underscore';
_.tap('espresso', (it) =>
    console.log(`Our drink is '${it}'`)
);

// Make our version work both ways
const _tap = (value, fn) => {
    const curried = (fn) => (
        typeof(fn) === 'function' && fn(value),
        value
    )
    
    return fn === undefined
        ? curried
        : curried(fn)
}

// Now it works both ways
_tap('espresso')((it) => {
    console.log(`Our drink is '${it}'`)
});

_tap('espresso', (it) =>
    console.log(`Our drink is '${it}'`)
);