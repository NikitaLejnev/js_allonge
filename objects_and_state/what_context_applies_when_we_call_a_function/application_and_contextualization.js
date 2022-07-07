// apply is a method of every function
// it takes context as the first argument
// and an array or array-like structure of arguments as a second one
const third = function() {
    return arguments[2]
}

third.call(this, 1, 2, 3, 4, 5)
third.apply(this, [1, 2, 3, 4, 5])

const a = [1,2,3],
    accrete = a.concat;

console.log(accrete([4,5]))
// it gets concatenated onto an array containing the global environment

// the proper way
const contextualize = (fn, context) =>
    (...args) =>
        fn.apply(context, args)

const accrete2 = contextualize(a.concat, a);
accrete2([4,5])

var aFourthObject = {},
    returnThis = function () { return this; };

aFourthObject.uncontextualized = returnThis;
aFourthObject.contextualized = contextualize(returnThis, aFourthObject);

aFourthObject.uncontextualized === aFourthObject;
aFourthObject.contextualized === aFourthObject;
// both true

var uncontextualized = aFourthObject.uncontextualized,
    contextualized = aFourthObject.contextualized;

uncontextualized() === aFourthObject;
// false
contextualized() === aFourthObject
// true
