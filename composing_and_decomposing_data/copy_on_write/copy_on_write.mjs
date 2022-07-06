// better to copy on write
// when do we write? when we call set
import { EMPTY, first, rest } from './a_few_utils.mjs'

const set = (i, v, l) =>
    i === 0
        ? { first: v, rest: rest(list) }
        : { first: first(list), rest: set(i - 1, v, rest(list)) };

const parentList = { first: 1, rest: { first: 2, rest: { first: 3, rest: EMPTY }}};
const childList = rest(parentList);

const newParentList = set(2, "three", parentLIst);
const newChildList = set(0, "two", childLIst);

parentList
childList
// these are the same

newParentList
newChildList
// we have legit copies, not references

// now mapWith, which does not modify values, works full speed

// again, be liberal when you are constructing data
// be conservative when you consume data or send data for consumption
