// one way to deal with structure sharing is to be pessimistic
// if you take the rest of the list, always make a copy
import { EMPTY, copy, set } from './a_few_utils.mjs'

const rest = ({ first, rest }) => copy(rest);

const parentList = { first: 1, rest: { first: 2, rest: { first: 3, rest: EMPTY }}};
const childList = parentList.rest;

const newParentList = set(2, "three", parentList);
set(0, "two", childList)

parentList
childList
// we can modify the copy independently from the original
// however it is expensive
// there is also a bug with setting the first element