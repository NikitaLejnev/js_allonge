// we can decorate methods if they preserve the function's context
let maybe = (fn) =>
    x => x != null ? fn(x) : x;

const plus1 = x => x + 1;

plus1(1)
plus1(0)
plus1(null)
plus1(undefined)

const maybePlus1 = maybe(plus1);
maybePlus1(1)
maybePlus1(0)
maybePlus1(null)
maybePlus1(undefined)
// it doesn't preserve context, let's convert it to a function function

maybe = (fn) =>
    function(x) {
        return x != null ? fn(x) : x;
    };

// and use .call
maybe = (fn) =>
    function(x) {
        return x != null ? fn.call(this, x) : x;
    };

// now we can handle variadic functions and methods
// variation invokes the function if none of the arguments are null or undefined

maybe = (fn) =>
    function (...args) {
        for (const i in args) {
            if (args[i] == null) return args[i]
        }
        return fn.apply(this, args);
    };

// to decorate methods we need to preserve context by:
    // using a function keyword and
    // invoking the decorated function with .call(this, args) or .apply(this, args)

const someObject = {
    setSize: maybe(function (size) {
        this.size = size
    })
}

someObject.setSize(5);
someObject

someObject.setSize(null);
someObject

// passing context is much slower, however it probably won't matter
// failing to pass context through decorators is much more dangerous

// if decorator uses state, this should be kept in mind when objects share method
// through prototype or sharing references to a function
