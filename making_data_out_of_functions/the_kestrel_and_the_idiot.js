// the kestrel, K
// makes constant functions,
// i.e. ones which return the same thing every time
const K = (x) => (y) => x;
const fortyTwo = K(42);
fortyTwo(6);
fortyTwo("Hello")

// the idiot bird, I
// identity function
// evaluates to the passed parameter
I(42)

// passing a value to K gets function back
// passing a value to that function gives us the value
K(6)(7)
K(12)(24)
// so if we pass K two values, it returns the first one

K(I)
// K(x)(y) => x so K(I)(x) => I

// K(I)(x)(y)




// K(I)(x) => I, therefore K(I)(x)(y) === I(y) === y
K(I)(6)(7)
K(I)(12)(24)

// if we pass K(I) two values, it returns the second one
const first = K,
    second = K(I);