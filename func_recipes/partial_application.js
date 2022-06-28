// One argument
const callFirst = ({ fn, larg }) => 
    function (...rest) {
        return fn.call(this, larg, ...rest);
    }

const callLast = ({ fn, rarg }) => 
    function (...rest) {
        return fn.call(this, ...rest, rarg);
    }

const greet = (me, you) =>
    `Hello, ${you}, I am ${me}`;

const heliosGreets = callFirst({ fn: greet, larg: 'Helios'});

console.log(heliosGreets('Eartha'));

const greetCeline = callLast({ fn: greet, rarg: 'Celine' });

console.log(greetCeline('Eartha'));

// Several arguments

const callLeft = (fn, ...args) => 
    (...remainingArgs) =>
        fn(...args, ...remainingArgs);

const callRight = (fn, ...args) => 
    (...remainingArgs) =>
        fn(...remainingArgs, ...args);