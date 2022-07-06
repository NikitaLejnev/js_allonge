let arraySum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; ++i) {
        sum += array[i];
    }
    return sum
}
// we are mixing summing with iterating
// the code is also too concrete,
// since the array must be indexed sequentially starting from 0

// let's rewrite it using a while loop
arraySum = (array) => {
    let done,
        sum = 0;
        i = 0;

    while ((done = i == array.length, !done)) {
        const value = array[i++];
        sum += value;
    }
    return sum
}
// we can put done and value into a POJO
arraySum = (array) => {
    let iter,
        sum = 0,
        index = 0;

    while (
        (eachIteration = {
            done: index === array.length,
            value: index < array.length ? array[index] : undefined
        },
        ++index,
        !eachIteration.done)
    ) {
        sum += eachIteration.value;
    }
    return sum;
}

console.log(arraySum([1, 4, 9, 16, 25]))
// summing logic needs to know only that POJO has value property

const arrayIterator = (array) => {
    let i = 0;

    return () => {
        const done = i === array.length;

        return {
            done,
            value: done ? undefined : array[i++]
        }
    }
}

const iteratorSum = (iterator) => {
    let eachIteration,
        sum = 0;

    while ((eachIteration = iterator(), !eachIteration.done)) {
        sum += eachIteration.value;
    }
    return sum;
}

console.log(iteratorSum(arrayIterator([1, 4, 9, 16, 25])))
// iteration logic is encapsulated within an iterator

const EMPTY = null;

const isEmpty = (node) => node === EMPTY;
const pair = (first, rest = EMPTY) => ({ first, rest });

const list = (...elements) => {
    const [first, ...rest] = elements;

    return elements.length === 0
        ? EMPTY
        : pair(first, list(...rest))
}

const print = (aPair) =>
    isEmpty(aPair)
        ? ""
        : `${aPair.first} ${print(aPair.rest)}`

const listIterator = (aPair) =>
    () => {
        const done = isEmpty(aPair);
        if (done) {
            return { done };
        } else {
            const { first, rest } = aPair;

            aPair = aPair.rest;
            return { done, value: first }
        }
    }

const aListIterator = listIterator(list(1, 4, 9, 16, 25));

console.log(iteratorSum(aListIterator))