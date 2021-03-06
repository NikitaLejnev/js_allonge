const once = (fn) => {
    let done = false;

    return function () {
      return done ? void 0 :((done = true), fn.apply(this.arguments))  
    } 
}

const askedOnBlindDate = once(
    () => "Sure, why not?"
);

console.log(askedOnBlindDate())
console.log(askedOnBlindDate())
console.log(askedOnBlindDate())
