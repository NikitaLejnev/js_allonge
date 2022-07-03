const parentArray = [1, 2, 3];
const [aFirst, ...childArray] = parentArray;

parentArray[2] = "three";
childArray[0] = "two";

parentArray
childArray
// taking "rest" of array creates copies

const EMPTY = { first: {}, rest: {} };
const parentList = { first: 1, rest: { first: 2, rest: { first: 3, rest: EMPTY }}};
const childList = parentList.rest;

parentList.rest.rest.first = "three";
childList.first = "two";

parentList
childList
// taking "rest" of array uses references to existing nodes