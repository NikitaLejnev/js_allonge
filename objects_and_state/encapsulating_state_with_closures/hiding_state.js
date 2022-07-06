// our stack doesn't hide data
// let's fix it with a closure

let stack = (() => {
    let array = [],
        index = -1;

    const obj = {
        push (value) { return array[index += 1] = value },
        pop() {
            const value = array[index];
            array[index] = undefined;
            if (index >= 0) {
                index -= 1
            }
            return value
        },
        isEmpty() { return index < 0}
    };

    return obj;
})();

// let's create a "stack maker"
// wrapping it in a function

let Stack = () =>
    (() => {
        let array = [],
            index = -1;

        const obj = {
            push (value) { return array[index += 1] = value },
            pop() {
                const value = array[index];
                array[index] = undefined;
                if (index >= 0) {
                    index -= 1
                }
                return value
            },
            isEmpty() { return index < 0}
        };

        return obj;
    }
)();

// there is an easier way
Stack = () => {
    const array = [];
    let index = -1;

    return {
        push (value) { return array[index += 1] = value },
        pop() {
            const value = array[index];
            array[index] = undefined;
            if (index >= 0) {
                index -= 1
            }
            return value
        },
        isEmpty() { return index < 0}
    };
}
// we've hidden the internal data and found a way to make stack freely