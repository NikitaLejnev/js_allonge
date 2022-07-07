// arguments is an object that acts a little like an array
const third = function() {
    return arguments[2]
}

third(1, 2, 3, 4, 5)
// ... accomplishes the same as using arguments in both types of functions
// arguments is bind only if function keyword is used