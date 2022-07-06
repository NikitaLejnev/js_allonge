// the implementation details are hidden from the code that uses the pair
// let's try with pojo
const K = (x) => (y) => x;
const I = (x) => x;
const V = (x) => (y) => (z) => z(x)(y)

let first = K,
    rest = K(I),
    pair = (first) => (second) => {
        const pojo = { first, second };
        return (selector) => selector(pojo.first)(pojo.second)
    },
    EMPTY = ({});

const latin = pair("primus")("secundus");

console.log(latin(first))
console.log(latin(second))

// now with linked lists
let length = (list) => list(
    () => 0,
    (aPair) => 1 + length(aPair(pairRest))
);
// we tell what we want the function to do when the list is empty or not

length = (node, delayed = 0) =>
    node === EMPTY
    // the line above makes the following assumptions:
        // there is one canonical empty list value
        // you can compare using ===
    // we can create isEmpty function and couple our code to the data structure even more
        ? delayed
        : length(node.rest, delayed + 1);

// two patterns for hiding implementation so far
    // pass a function instead of manipulating directly
    // instead of testing properties and choosing what to do ...
    // ... pass the work you want to be done in each case and let data test itself