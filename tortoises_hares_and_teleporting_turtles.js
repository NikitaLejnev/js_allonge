// write an algorithm to detect a loop in a linked list
// in constant space
const EMPTY = null;

const isEmpty = (node) => node === EMPTY;

const pair = (first, rest=EMPTY) => ({ first, rest });

const list = (...elements) => {
    const [first, ...rest] = elements;
    return elements.length === 0
        ? EMPTY
        : pair(first, list(...rest))
}

const forceAppend = (list1, list2) => {
    if (isEmpty(list1)) return "FAIL!"
    if (isEmpty(list1.rest)) list1.rest = list2;
    else forceAppend(list1.rest, list2);
}

const tortoiseAndHare = (aPair) => {
    let tortoisePair = aPair,
        harePair = aPair.rest;

    while (true) {
        if (isEmpty(tortoisePair) || isEmpty(harePair))
            return false;
        if (tortoisePair.first === harePair.first) 
            return true

        harePair = harePair.rest;

        if (isEmpty(harePair)) return false;
        if (tortoisePair.first === harePair.first) 
            return true
        
        tortoisePair = tortoisePair.rest
        harePair = harePair.rest;
    }
};

let aList = list(1, 2, 3, 4, 5);
tortoiseAndHare(aList)

forceAppend(aList, aList.rest.rest);
tortoiseAndHare(aList)
// slow pair will catch up on the fast pair if there is a loop

// implementation using powers of two algorithm
const teleportingTurtle = (list) => {
    let speed = 1,
        rabbit = list,
        turtle = rabbit;
    
    while (true) {
        for (let i = 0; i <= speed; i += 1) {
            rabbit = rabbit.rest;
            if (rabbit == null) return false;
            if (rabbit === turtle) return true;
        }
        turtle = rabbit;
        speed *= 2;
    }
    return false;
};

aList = list(1, 2, 3, 4, 5);
tortoiseAndHare(aList)

forceAppend(aList, aList.rest.rest);
tortoiseAndHare(aList)

// both algorithms tangle data structure traversal
// and working with encountered elements