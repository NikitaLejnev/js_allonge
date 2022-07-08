let Stack3 = () => ({
    array: [],
    index: -1,
    push(value) {
        return this.array[this.index += 1] = value;
    },
    pop() {
        const value = this.array[this.index];

        this.array[this.index] = undefined;
        if (this.index >= 0) {
            this.index -= 1
        }
        return value
    },
    isEmpty() {
        return this.index < 0
    },
    [Symbol.iterator]() {
        // we use symbol to ensure our method name does not collide with others
        let iterationIndex = this.index;

        return {
            next() {
                if (iterationIndex > this.index) {
                    iterationIndex = this.index;
                }
                if (iterationIndex < 0) {
                    return { done: true };
                } else {
                    return { done: false, value: this.array[iterationIndex--] }
                }
            }
        }
    }
});

let stack = Stack3();

stack.push(2000);
stack.push(10);
stack.push(5);

console.log(stack)

let collectionSum = (collection) => {
    const iterator = collection[Symbol.iterator]();
    let eachIteration,
        sum = 0;
    
    while ((eachIteration = iterator.next(), !eachIteration.done)) {
        sum += eachIteration.value;
    }
    return sum
}

console.log(collectionSum(stack))

// is it worth it?
let iterableSum = (iterable) => {
    let sum = 0;

    for (const num of iterable) {
        sum += num;
    }
    return sum
}
console.log(iterableSum(stack))
// it is, for ... of loop works with any iterable object
// iterable means 'has Symbol.iterator method that
// returns an object iterator'

const EMPTY = {
    isEmpty: () => true
};

const isEmpty = (node) => node === EMPTY;

const Pair1 = (first, rest = EMPTY) =>
    ({
        first,
        rest,
        isEmpty () { return false },
        [Symbol.iterator]() {
            let currentPair = this;
            
            return {
                next() {
                    if (currentPair.isEmpty()) {
                        return { done: true }
                    } else {
                        const value = currentPair.first;

                        currentPair = currentPair.rest;
                        return { done: false, value }
                    }
                }
            }
        }
    });

const list = (...elements) => {
    const [first, ...rest] = elements;

    return elements.length === 0
        ? EMPTY
        : Pair1(first, list(...rest))
}

const someSquares = list(1,4,9,16,25);

iterableSum(someSquares)
// we wrote an iterable linked list

// ... spread operator can spread the elements of any iterable object
['some squares', ...someSquares]

// also we can spread elements from an array literal into parameters
const firstAndSecondElement = (first, second) =>
    ({ first, second })
firstAndSecondElement(...stack)

// NB: spreading iterables creates arrays from the elements, which can be expensive
