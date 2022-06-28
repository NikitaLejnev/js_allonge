// Native map() method
['1', '2', '3'].map(parseFloat)

[1, 2, 3].map(function (el, index, arr) {
    console.log({ el, index, arr })
})

// Doesn't work since parseInt is defined as parseInt(string[, radix])
['1', '2', '3'].map(parseInt)

// Decorator function
const unary = (fn) =>
    fn.length === 1
        ? fn
        : function (something) {
            return fn.call(this, something)
        }

['1', '2', '3'].map(unary(parseInt))