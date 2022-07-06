const stack = (() => {
    const obj = {
        array: [],
        index: -1,
        push(value) {
            return obj.array[obj.index += 1] = value
        },
        pop() {
            const value = obj.array[obj.index];
            obj.array[obj.index] = undefined;
            if (obj.index >= 0) {
                obj.index -= 1
            }
            return value
        },
        isEmpty() {
            return obj.index < 0
        }
    };

    return obj;
})();

stack.isEmpty()
stack.push('hello')
stack.push('JavaScript')
stack.isEmpty()
stack.pop()
stack.pop()
stack.isEmpty()