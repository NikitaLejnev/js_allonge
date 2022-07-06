const K = (x) => (y) => x;
const I = (x) => x;
const V = (x) => (y) => (z) => z(x)(y)

let first = K;
let rest = K(I);
let pair = V;
let EMPTY = (() => {});
// we use the pattern: aPair === EMPTY ? doSomething : doSomethingElse
// this follows the principle: the function doing the work inspects the data structure

// how about asking a pair to check the emptiness for us
let length = (aPair) =>
    aPair === EMPTY
        ? 0
        : 1 + length(aPair(rest));

// assume we are working with a higher abstraction level
length = (list) => list(
    () => 0,
    (aPair) => 1 + length(aPair(rest))
)

// we now need to write first and rest functions for list
let pairFirst = K,
    pairRest = K(I);

first = (list) => list(
    () => "ERROR: Can't take first of an empty list",
    (aPair) => aPair(pairFirst)
);

rest = (list) => list(
    () => "ERROR: Can't take first of an empty list",
    (aPair) => aPair(pairRest)
);

length = (list) => list(
    () => 0,
    (aPair) => 1 + length(aPair(pairRest))
);

let print = (list) => list(
    () => "",
    (aPair) => `${aPair(pairFirst)} ${print(aPair(pairRest))}`
);

let EMPTYLIST = (whenEmpty, unlessEmpty) => whenEmpty()
let node = (x) => (y) =>
    (whenEmpty, unlessEmpty) => unlessEmpty(pair(x)(y));

let l123 = node(1)(node(2)(node(3)(EMPTYLIST)));

console.log(print(l123))

// we are not strict in emulating combinatorial logic, so we will use default params
let reverse = (list, delayed = EMPTYLIST) => list(
    () => delayed,
    (aPair) => reverse(aPair(pairRest), node(aPair(pairFirst))(delayed))
);

console.log(print(reverse(l123)))

let mapWith = (fn, list, delayed = EMPTYLIST) =>
    list(
        () => reverse(delayed),
        (aPair) => mapWith(fn, aPair(pairRest), node(fn(aPair(pairFirst)))(delayed))
    );

console.log(print(mapWith(x => x * x, reverse(l123))))
// we have provided the same functionality as === and ?: