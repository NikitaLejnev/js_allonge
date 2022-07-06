const [first, second = "two"] = ["one"];
console.log(`${first} . ${second}`)

const [one, two = "two"] = ["uno", "dos"];
console.log(`${one} . ${two}`)
// defaults work with destructuring