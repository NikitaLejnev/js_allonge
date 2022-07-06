let mapWith = (fn) => (list) => list.map(fn);
// we can write the function like this
mapWith = (fn) => (list) => map(list, fn);
// we are making two separate transformations

// we reverse the arguments
mapWith = (fn, list) => list.map(fn);

// and we curry a function
let mapper = (list) => (fn) => map(list, fn);

// snap back to reality
mapWith = (fn) => (list) => list.map(fn);

// we will parametrize .map so we extract two operations
// first give parameters generic names
mapWith = (first) => (second) => map(second, first);

// then wrap into a function and extract map
let wrapper = (fn) =>
    (first) => (second) => fn(second, first);

// let's give it an appropriate name
const flipAndCurry = (fn) =>
    (first) => (second) => fn(second, first);

// now just flip
const flip = (fn) =>
    (first, second) => fn(second, first);

// we can define mapWith using flipAndCurry
mapWith = flipAndCurry(map)