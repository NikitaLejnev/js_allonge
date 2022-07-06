// for data access with K and K(I), the structure is the function
// (selector) => selector("primus")("secundus")
// let's extract them into parameters

(first, second) => (selector) => selector(first)(second)
// combinators are generally written as functions taking one parameter
// let's curry the function
const K = (x) => (y) => x
const I = (x) => x

const first = K,
      second = K(I),
      pair = (first) => (second) => (selector) => selector(first)(second)

const latin = pair("primus")("secundus")

console.log(latin(first))
console.log(latin(second))

// V combinator, the Vireo
const V = (x) => (y) => (z) => z(x)(y)

// the Vireo is similar to js .apply function
// take two parameters and apply them to the function

// K, I and V are enough
// to make cons cell of Lisp or node of a linked list