// K and I represented as array values
let first = ([first, second]) => first,
      second = ([first, second]) => second

let latin = ["primus", "secundus"];

first(latin)
second(latin)

// using a POJO
first = ({ first, second }) => first;
second = ({ first, second }) => second;

const K = (x) => (y) => x;
const I = (x) => x;

// combinators don't now how to extract data
// let's lend 'em a hand
first = K;
second = I;

latin = (selector) => selector("primus")("secundus");

latin(first);
latin(second);
// now latin is a function, not a data structure
// so we pass first and second to latin
// it is exactly backwards
