// all expressions are evaluated late, when the line gets evaluated

const name = "Harry";

let greeting = (name) => `Hello my name is ${name}`;
greeting('Arthur Dent')
// quasi-literal is evaluated when the function is invoked
// so name is bound to Arthur Dent

// it is the same as this
greeting = (name) => 'Hello my name is ' + name;

greeting('Arthur Dent')
