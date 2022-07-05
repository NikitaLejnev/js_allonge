// iterators can manufacture data
const NumberIterator = (number = 0) =>
    () => ({ done: false, value: number++ })

fromOne = NumberIterator(1);

console.log(fromOne().value);
console.log(fromOne().value);
console.log(fromOne().value);
console.log(fromOne().value);
console.log(fromOne().value);

const FibonacciIterator = () => {
    let previous = 0,
        current = 1;
    return () => {
        const value = current;

        [previous, current] = [current, current + previous];
        return { done: false, value };
    };
};

const fib = FibonacciIterator()

console.log(fib().value);
console.log(fib().value);
console.log(fib().value);
console.log(fib().value);
console.log(fib().value);
console.log(fib().value);

const mapIteratorWith = (fn, iterator) =>
    () => {
        const { done, value } = iterator();
        return ({ done, value: done ? undefined : fn(value)});
    }

const squares = mapIteratorWith((x) => x * x, NumberIterator(1));

console.log(squares().value);
console.log(squares().value);
console.log(squares().value);
console.log(squares().value);
console.log(squares().value);

// a function that takes an iterator and returns another iterator
const take = (iterator, numberToTake) => {
    let count = 0;

    return () => {
        if (++count <= numberToTake) {
            return iterator();
        } else {
            return { done: true };
        }
    };
};

const toArray = (iterator) => {
    let eachIteration,
        array = [];
    
    while ((eachIteration = iterator(), !eachIteration.done)) {
        array.push(eachIteration.value);
    }
    return array;
}

console.log(toArray(take(FibonacciIterator(), 5)))
console.log(toArray(take(squares, 5)))

const odds = () => {
    let number = 1;
    return () => {
        const value = number;
        number += 2;
        return { done: false, value};
    }
}

const callLeft = (fn, ...args) =>
    (...remainingArgs) =>
        fn(...args, ...remainingArgs);

const squareOf = callLeft(mapIteratorWith, (x) => x * x)
console.log(toArray(take(squareOf(odds()), 5)))

// outdated
const filterIteratorWith = (fn, iterator) =>
    () => {
        do {
            var { done, value } = iterator();
        } while (!done && !fn(value));
        return { done, value };
    }

const oddsOf = callLeft(filterIteratorWith, (n) => n % 2 === 1);

console.log(toArray(take(squareOf(oddsOf(NumberIterator(1))), 5)))