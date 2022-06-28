// use pipeline to compose functions in DATA FLOW ORDER
const pipeline = (...fns) =>
    (value) =>
        fns.reduce((acc, fn) => fn(acc), value);

// add one to the number and then double it
const setter = pipeline(addOne, double);
// compose and pipeline do the same, but communicate intention differently