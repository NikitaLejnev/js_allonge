// we modeled a linked list as two-element array
const cons = (a, d) => [a, d],
      car = ([a, d]) => a,
      cdr = ([a, d]) => d;


// objects are closer to the truth
// equivalent of [first, ...rest]
const EMPTY = {};
const OneTwoThree = { first: 1, rest: { first: 2, rest: { first: 3, rest: EMPTY } } };

console.log(OneTwoThree.first)
console.log(OneTwoThree.rest)
console.log(OneTwoThree.rest.rest.first)

const length = (node, delayed = 0) =>
    node === EMPTY
    ? delayed
    : length(node.rest, delayed + 1)

// copying a list is sloooooooooooooooooooooooooooooooooooooooooow
const slowCopy = (node) =>
    node === EMPTY
    ? EMPTY
    : { first: node.first, rest: slowCopy(node.rest)};
// linked lists are constructed back-to-front,
// we iterate over them front-to-back

// how about delaying work
const copy2 = (node, delayed = EMPTY) =>
    node === EMPTY
    ? delayed
    : copy2(node.rest, { first: node.first, rest: delayed });
console.log(copy2(OneTwoThree))
// we reversed the list

const reverse = (node, delayed = EMPTY) =>
    node === EMPTY
    ? delayed
    : reverse(node.rest, { first: node.first, rest: delayed });

const reverseMapWith = (fn, node, delayed = EMPTY) =>
    node === EMPTY
    ? delayed
    : reverseMapWith(fn, node.rest, { first: fn(node.first), rest: delayed });

const mapWith = (fn, node, delayed = EMPTY) =>
    node === EMPTY
        ? reverse(delayed)
        : mapWith(fn, node.rest, { first: fn(node.first), rest: delayed });
//  this function iterates once to map and once to reverse the list
// it takes twice as long as a straight iteration
// it also takes twice as much space since it constructs a reversed list and 
// throws it away

// however, it creates n nodes and copies n values
// our previous algorithm created 2n arrays and n*n values
