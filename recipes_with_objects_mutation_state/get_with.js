// getWith takes the name of an attribute and returns a function
// that extracts the value of that attribute from an object
const getWith = (attr) => (object) => object[attr]

const inventory = {
    apples: 0,
    oranges: 144,
    eggs: 36
};

console.log(getWith('oranges')(inventory))

// let's combine it with mapWith
const inventories =[
    { apples: 0, oranges: 144, eggs: 36 },
    { apples: 240, oranges: 54, eggs: 12 },
    { apples: 24, oranges: 12, eggs: 42 },
]

const mapWith = (fn) => (list) => list.map(fn);

console.log(mapWith(getWith('oranges'))(inventories))

// or with maybe

const maybe = (fn) =>
    function (...args) {
        if (args.length === 0) return
        else {
            for (let arg of args) {
                if (arg === null || arg === void 0) return
            }
            return fn.apply(this, args)
        }
    }

mapWith(maybe(getWith('oranges')))

// so why is it called getWith?
// there is a function common in languages without methods
const get = (obj, attr) => object[attr];

// why to use this instead of []?
// we can manipulate functions in ways different from syntax manipulations

// we could use it with flip
// var getWith = flip(get)
// and that's why it's called getWith
