const abccc = (a, b, ...c) => {
    console.log(a);
    console.log(b);
    console.log(c);
};

abccc(1, 2, 3, 4, 5)

function team(coach, captain, ...players) {
    console.log(`${captain} (captain)`);
    for (const player of players) {
        console.log(player);
    }
    console.log(`squad coached by ${coach}`);
}

team('Luis Enrique', 'Xavi Hernandez', 'Marc-Andre ter Stegen',
     'Martin Montoya', 'Gerard Pique')

// Won't work: spread parameter is allowed at the end only
// function team2(...players, captain, coach) {
//     console.log()
//     console.log(`${captain} (captain)`);
//     for (const player of players) {
//         console.log(player);
//     }
//     console.log(`squad coached by ${coach}`);
// }

// ES5 version of right-variadic
var __slice = Array.prototype.slice;

function rightVariadic (fn) {
    if (fn.length < 1) return fn;
    
    return function() {
        var ordinaryArgs = (1 <= arguments.length ?
            __slice.call(arguments, 0, fn.length - 1) : [])
        restOfArgs = __slice.call(arguments, fn.length - 1),
        args = (fn.length <= arguments.length ?
            ordinaryArgs.concat([restOfArgs]) : []);

        return fn.apply(this, args)
    }
    
}

var firstAndButFirst = rightVariadic(function test(first, butFirst) {
    return [first, butFirst]
});

firstAndButFirst('why', 'hello', 'there', 'little', 'droid' )
