// iterables can be infinite
let Numbers = {
    [Symbol.iterator]() {
        let n = 0;
        return {
            next: () =>
                ({ done: false, value: n++ })
        }
    }
}

['all the numbers', ...Numbers];
// spreading infinite iterables always fails
