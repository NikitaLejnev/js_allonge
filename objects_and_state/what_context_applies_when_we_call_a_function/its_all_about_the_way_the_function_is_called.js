const someObj = {
    someFn() {
        return this;
    }
};

someObj.someFn() === someObj
// what is the context of a function? Don't jump to conclusions

const someFn = someObj.someFn;

someFn === someObj.someFn
someFn() !== someObj
// it gets weirder

const anotherObj = {
    someFn: someObj.someFn
}

anotherObj.someFn() === someObj.someFn
anotherObj.someFn() === anotherObj
anotherObj.someFn() !== someObj
// if you call a function using someObj.someFn(), the context is send to the receiver
// other ways of resolving the function's value return something else

(someObj.someFn)() === someObj
someObj['someFn']() === someObj

const name = 'someFn';
someObj[name]() === someObj
// that works

let baz;
(baz = someObj.someFn)() === this
// works too

const arr = [someObj.someFn];
arr[0]() === arr
// so a.b(), a['b'](), a[n]() and (a.b)() return context a

const returnThis = function() { return this };

const aThirdObject = {
    someFunction() {
        return returnThis()
    }
}

returnThis() === this
aThirdObject.someFunction() === this
// in other cases you get global environment
// so calling a function with . or [] gives you the correct context
