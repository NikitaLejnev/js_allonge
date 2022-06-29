// a tail-call is when a function returns another function
// and then returns the returned value of the other function

// three places where this function returns
const maybe = (fn) =>
    function (...args) {
        if (args.length === 0 ) return;
        // here, returns undefined so nevermind
        else {
            for (const arg of args) {
                if (arg === null || arg === void 0) return;
                // here, returns undefined so nevermind
            }
            return fn.apply(this, args);
            // a tail-call
        }
    }
// if a function makes a tail-call, JS optimizes away
// the function call overhead and stack space

const length = ([first, ...rest]) =>
    first === void 0
        ? 0
        : 1 + length(rest)
// it is NOT a tail-call
// it returns 1 + length(rest), not length(rest)
