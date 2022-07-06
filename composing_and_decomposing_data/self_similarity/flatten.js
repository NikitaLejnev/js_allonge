const flatten = ([head, ...tail]) => {
    if (head === void 0) return []
    else if (!Array.isArray(head)) return [head, ...flatten(tail)]
    else return [...flatten(head), ...flatten(tail)]
}

console.log(flatten([["i", "suck"], ["at"], ["programming"]]))