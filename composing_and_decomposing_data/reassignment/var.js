let factorial = (n) => {
    let x = n;
    if (x === 1) {
        return 1;
    } else {
        --x;
        return n * factorial(x);
    }
}

factorial(5)

const factorial2 = (n) => {
    var x = n;
    if (x === 1) {
        return 1;
    } else {
        --x;
        return n * factorial2(x);
    }
}

factorial2(5)

// var is not BLOCK scoped, it is FUNCTION scoped,
// like function declarations

(() => {
    var age = 49;
    if (true) {
        var age = 50;
    }
    return age;
})()
// no errors
// 50 !!!

// function declaration can be anywhere in a function
// declaration AND definition are hoisted

factorial = (n) => {
    return innerFactorial(n, 1);

    function innerFactorial(x, y) {
        if (x == 1) return y;
        else return innerFactorial(x-1, x * y);
    }
}

factorial(4)
// it is interpreted as:
factorial = (n) => {
    let innerFactorial = function innerFactorial (x, y) {
        if (x == 1) return y;
        else return innerFactorial(x-1, x * y);
    }

    return innerFactorial(n, 1);
}

// however
factorial = (n) => {
    return innerFactorial(n, 1);

    var innerFactorial = function innerFactorial (x, y) {
        if (x == 1) return y;
        else return innerFactorial(x-1, x * y);
    }
}

factorial(4)
// with var, only the declaration is hoisted, not the assignment

// it is similar to this
factorial = (n) => {
    let innerFactorial = undefined;

    return innerFactorial(n, 1);

    innerFactorial = function innerFactorial (x, y) {
        if (x == 1) return y;
        else return innerFactorial(x-1, x * y);
    }
}