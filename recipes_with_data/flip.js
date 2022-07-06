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
let flipAndCurry = (fn) =>
    (first) => (second) => fn(second, first);

// now just flip
let flip = (fn) =>
    (first, second) => fn(second, first);

// we can define mapWith using flipAndCurry
mapWith = flipAndCurry(map)

// what if we want to have curried and non-curried variants of flip?
flip = (fn) =>
    function (first, second) {
        if (arguments.length === 2) {
            return fn(second, first);
        } else {
            return function (second) {
                return fn(second, first);
            }
        }
    }

// so if we write mapWith = flip(map) 
// we can call mapWith(fn, list) or mapWith(fn)(list)

// flip throws away the current context away, let's fix it
flipAndCurry = (fn) =>
    (first) =>
        function (second) {
            return fn.call(this, second, first);
        }

flip = (fn) =>
    function (first, second) {
        return fn.call(this, second, first);
    }

flip = (fn) =>
    function (first, second) {
        if (arguments.length === 2) {
            return fn.call(this, second, first);
        } else {
            return function (second) {
                return fn.call(this, second, first)
            }
        }
    }