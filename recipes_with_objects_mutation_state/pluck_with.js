// combining mapWith and getWith is very frequent, let's take it to the next level
const mapWith = (fn) => (list) => list.map(fn);
const getWith = (attr) => (object) => object[attr]

let pluckWith = (attr) => mapWith(getWith(attr));
// or better

const compose = (a, b) =>
    (c) => a(b(c))

pluckWith = compose(mapWith, getWith);

const inventories = [
    { apples: 0, oranges: 144, eggs: 36 },
    { apples: 240, oranges: 54, eggs: 12 },
    { apples: 24, oranges: 12, eggs: 42 },
]

console.log(pluckWith('eggs')(inventories))
