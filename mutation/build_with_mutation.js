// without mutation a copy of linked list can be made in constant space, like this
const EMPTY = [];

const reverse = (node, delayed = EMPTY) =>
    node === EMPTY
    ? delayed
    : reverse(node.rest, { first: node.first, rest: delayed });

let copy = (node) => reverse(reverse(node));

// we can avoid two iterations by mutating a value
copy = (node, head = null, tail = null) => {
    if (node === EMPTY) return head
    else {
        const { first, rest } = node;
        const newNode = { first, rest };
        if (tail === null)
            return copy(rest, newNode, newNode);
        else {
            tail.rest = newNode
            return copy(node.rest, head, newNode);
        }
    }
}
// we copy nodes as we go and mutate the last node in the list
// so we can splice the next one on
// when we are creating a list we are not sharing nodes with others
// hence we can be more liberal with mutation

const mapWith = (fn, node, head = null, tail = null) => {
    if (node === EMPTY) return head
    else {
        const { first, rest } = node;
        const newNode = { first: fn(first), rest };
        if (tail === null)
            return mapWith(fn, rest, newNode, newNode);
        else {
            tail.rest = newNode
            return mapWith(fn, node.rest, head, newNode);
        }
    }
}
