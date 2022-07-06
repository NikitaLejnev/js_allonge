// here is linked list implemented with first, rest and pair
let first = ({ first, rest }) => first,
    rest = ({ first, rest }) => rest,
    pair = (first, rest) => ({ first, rest }),
    EMPTY = ({});

let l123 = pair(1, pair(2, pair(3, EMPTY)))

console.log(first(l123))
console.log(first(rest(l123)))
console.log(first(rest(rest(l123))))

let length = (aPair) => 
    aPair === EMPTY
        ? 0
        : 1 + length(rest(aPair));

let reverse = (aPair, delayed = EMPTY) =>
    aPair === EMPTY
        ? delayed
        : reverse(rest(aPair), pair(first(aPair), delayed));

let mapWith = (fn, aPair, delayed = EMPTY) =>
    aPair === EMPTY
        ? delayed
        : mapWith(fn, rest(aPair), pair(fn(first(aPair)), delayed))

let doubled = mapWith((x) => x * 2, l123);

console.log(first(doubled))
console.log(rest(doubled))
console.log(first(rest(rest(doubled))))

// now with K, I and V
const K = (x) => (y) => x;
const I = (x) => x;
const V = (x) => (y) => (z) => z(x)(y)

first = K;
rest = K(I);
pair = V;
EMPTY = (() => {});

l123 = pair(1)(pair(2)(pair(3)(EMPTY)));

console.log(l123(first))
console.log(l123(rest)(first))
console.log(l123(rest)(rest)(first))

length = (aPair) =>
    aPair === EMPTY
        ? 0
        : 1 + length(aPair(rest));

console.log(length(l123))

reverse = (aPair, delayed = EMPTY) =>
    aPair === EMPTY
        ? delayed
        : reverse(aPair(rest), pair(aPair(first))(delayed));

mapWith = (fn, aPair, delayed = EMPTY) =>
    aPair === EMPTY
        ? reverse(delayed)
        : mapWith(fn, aPair(rest), pair(fn(aPair(first)))(delayed));

doubled = mapWith((x) => x * 2, l123)

console.log(doubled(first))
console.log(doubled(rest)(first))
console.log(doubled(rest)(rest)(first))
// we can use pure functions to represent a linked list
