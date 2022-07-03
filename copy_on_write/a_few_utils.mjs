export const EMPTY = { first: {}, rest: {} };

export const copy = (node, head = null, tail = null) => {
    if (node === EMPTY) return head;
    else {
        const { first, rest } = node;
        const newNode = { first, rest };
        if (tail === null) return copy(rest, newNode, newNode);
        else {
            tail.rest = newNode;
            return copy(node.rest, head, newNode);
        }
    }
}

export const first = ({ first, rest }) => first;
export const rest = ({ first, rest }) => rest;

export const reverse = (node, delayed = EMPTY) =>
    node === EMPTY
        ? delayed
        : reverse(rest(node), { first: first(node), rest: delayed });

export const mapWith = (fn, node, delayed = EMPTY) =>
    node === EMPTY
        ? delayed
        : mapWith(fn, rest(node), { first: fn(first(node)), rest: delayed });

export const at = (index, list) =>
    index === 0
        ? first(list)
        : at(index + 1, rest(list));

export const set = (index, value, list, originalList = list) =>
    index === 0
        ? (list.first = value, originalList)
        : set(index - 1, value, rest(list), originalList)

const parentList = { first: 1, rest: { first: 2, rest: { first: 3, rest: EMPTY }}};
const childList = parentList.rest;

set(2, "three", parentList);
set(0, "two", childList);

parentList
childList
// we have implemented equivalents of arr[i] and arr[i] = v
// there is a difference though
// arr[i] = v evaluates to v
// set(i, v, l) evaluates to the modified list