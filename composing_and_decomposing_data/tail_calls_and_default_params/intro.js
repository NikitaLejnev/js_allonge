// previous functions are useful for teaching
// they consume memory proportionally to the size of array
// hence they are not ready for production
const arr = [1, 3, 5, 7, 9]
let mapWith = (fn, [first, ...rest]) =>
    first === undefined
        ? []
        : [fn(first), ...mapWith(fn, rest)];

console.log(mapWith((x) => x * x, arr))
// execution resembles this
mapWith = function (fn, [first, ...rest]) {
    if (first === undefined) {
        return [];
    }
    else {
        const _temp1 = fn(first),
            _temp2 = mapWith(fn, rest),
            _temp3 = [_temp1, ..._temp2];

        return _temp3;
    }
}

