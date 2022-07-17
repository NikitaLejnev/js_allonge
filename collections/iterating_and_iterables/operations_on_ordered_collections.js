const mapWith = (fn, collection) =>
    ({
        [Symbol.iterator]() {
            const iterator = collection[Symbol.iterator]();
            return {
                next() {
                    const { done, value } = iterator.next()
                    return ({ done, value: done ? undefined : fn(value) });
                }
            }
        }
    })
// the pattern of working with ordered collections:
// make the iterable by adding Symbol.iterator method
// which returns an iterator

// when we use for ... of loop, js calls the Symbol.iterator()
// mapWith is a collection operator because it preserves collection semantics

const filterWith = (fn, iterable) =>
    ({
        [Symbol.iterator]() {
            const iterator = iterable[Symbol.iterator]();
            return {
                next() {
                    do {
                        var { done, value } = iterator.next();
                    } while (!done && !fn(value));
                    return ({ done, value })
                }
            }
        }
    });

const untilWith = (fn, iterable) =>
    ({
        [Symbol.iterator]() {
            const iterator = iterable[Symbol.iterator]();
            return {
                next() {
                    let { done, value } = iterator.next();
                    done = done || fn(value);
                    return ({ done, value: done ? undefined : value });
                }
            }
        }
    });

// create an ordered collection of square numbers
// that end in one and are less than 1,000
const Numbers = {
    [Symbol.iterator]() {
        let n = 0;
        return {
            next: () =>
                ({ done: false, value: n++ })
        }
    }
}

const Squares = mapWith((x) => x * x, Numbers);
const EndWithOne = filterWith((x) => x % 10 === 1, Squares);
const UpTo1000 = untilWith((x) => x > 1_000, EndWithOne);

[...UpTo1000]

const first = (iterable) =>
    iterable[Symbol.iterator]().next().value;

const rest = (iterable) =>
    ({
        [Symbol.iterator]() {
            const iterator = iterable[Symbol.iterator]();
            iterator.next();
            return iterator
        }
    })