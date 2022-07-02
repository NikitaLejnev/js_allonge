var introductions = [],
    names = ['Karl', 'Friedrich', 'Gauss'];

for (var i = 0; i < 3; i++) {
    introductions[i] = "Hello, my name is " + names[i]
}
introductions
// so far so good
// remember that function in js are values?

for (var i = 0; i < 3; i++) {
    introductions[i] = (soAndSo) =>
        `Hello, ${soAndSo}, my name is ${names[i]}`
}
introductions
// so far so good

introductions[1]('Raganwald')
// why? because var is bound to the surrounding environment

// a hack used before block-scoped let
// using IIFE
for (var i = 0; i < 3; i++) {
    ((i) => {
        introductions[i] = (soAndSo) =>
            `Hello, ${soAndSo}, my name is ${names[i]}`
    })(i)
}

introductions[1]('Raganwald')
// now it works
