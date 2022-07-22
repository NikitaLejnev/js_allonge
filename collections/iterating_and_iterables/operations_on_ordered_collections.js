const mapWith = (fn, collection) =>
    ({
        [Symbol.iterator]() {
            const iterator = collection[Symbol.iterator]();

            return {
                next() {
                    const { done, value } = iterator.next();
                    return ({ done, value: done ? undefined : fn(value) });
                }
            }
        }
    })

// the pattern of working with ordered collections:
// make them iterables by adding [Symbol.iterator] method, that returns an iterator

const Evens = mapWith((x) => 2 * x, Numbers);
// works the same as this
// const Evens = {
//     [Symbol.iterator]() {
//         const iterator = Numbers[Symbol.iterator]();
//         return {
//             next() {
//                 const { done, value } = iterator.next();
//                 return ({ done, value: done ? undefined : fn(value) });
//             }
//         }
//     }
// }