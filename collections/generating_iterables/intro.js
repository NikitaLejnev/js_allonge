const Numbers = {
    [Symbol.iterator]: () => {
        // iteration {
        let n = 0;
        return {
            next: () =>
                ({ done: false, value: n++ })
        }
        // }
    }
}
// this iterable is a server, it waits for requests and then acts

// this is generation
let n = 0;
while (true) console.log(n++)

// some collections are easier to generate than to iterate over them