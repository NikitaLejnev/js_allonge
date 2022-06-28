// common pattern: function does something only
// if it gets something, i.e. not null or undefined
const isSomething = (value) => 
    value !== null && value !== void 0;

const checkForSomething = (value) =>{
    if (isSomething(value)) {
        // function's purpose
    }
}

// or function works with any value
// but we need to emulate doing nothing when given nothing
let something = 
    isSomething(value)
        ? doesntCheckForSomething(value)
        : value;

const maybe = (fn) =>
    function (...args) {
        if (args.length === 0) return
        else {
            for (let arg of args) {
                if (arg === null || arg === void 0) return
            }
            return fn.apply(this, args)
        }
    }

maybe((a, b, c) => a + b + c)(1, 2, 3)
maybe((a, b, c) => a + b + c)(1, null, 3)