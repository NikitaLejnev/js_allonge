// two other ways to set the context are determined by the caller too

// functions have methods, one of them is call
const someObj = {
    someFn() {
        return this;
    }
};

const anotherObj = {
    someFn: someObj.someFn
}

const aThirdObject = {
    someFunction() {
        return returnThis()
    }
}

const returnThis = function() { return this };

returnThis() !== aThirdObject
returnThis.call(aThirdObject) === aThirdObject
anotherObj.someFn.call(someObj) === someObj
// the first argument to call is bound to this

// here is some fun
const a = [1,2,3],
    b = [4,5,6];

console.log(a.concat.call(b, [2,1]))

// a.b() is the same as b.call(a)
// in browser, c() means c.call(window)
