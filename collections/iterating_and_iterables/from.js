Stack3.from = function (iterable) {
    const stack = this();
    for (let element of iterable) {
        stack.push(element);
    }
    return stack
}

const EMPTY = ({});
Pair1.from = (iterable) =>
    (function iteratoionToList (iteration) {
        const { done, value } = iteration.next();
        return done ? EMPTY : Pair1(value, iterationToList(iteration));
    })(iterable[Symbol.iterator]())