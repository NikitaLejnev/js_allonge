const length = ([first, ...rest]) => 
    first === undefined
        ? 0
        : 1 + length(rest);

console.log(length(['1', '2', '3']))