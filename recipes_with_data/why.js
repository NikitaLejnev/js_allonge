// the canonical Y Combinator
const Y = (f) =>
    (x => f(v => x(x)(v)) )
    (x => f(v => x(x)(v)) );

const factorial = Y(function (fac) {
    return function (n) {
        return (n === 0 ? 1 : n * fac(n - 1));
    }
});

// (x => )

factorial(5)
// it allows us to make recursive functions without binding it to a name
// it is of little use in js, but essential in combinatorial logic