// in js, almost every value type can mutate
// identities are the same, structures change
// arrays and objects are mutable
const oneTwoThree = [1, 2, 3];
oneTwoThree[0] = 'one';
oneTwoThree

oneTwoThree[3] = 'four';
oneTwoThree

const name = {
    firstName: 'Leonard',
    lastName: 'Braithwaite',
};

// same with objects
name.middleName = 'Austin'
name

// js semantics allow to bind two different bindings to the same value
const allHallowsEve = [2012, 10, 31]
const halloween = allHallowsEve;

(function (halloween) {})(allHallowsEve);
// two nested environments, each binds a name to the same array value
// we have created aliases

(function (halloween) {
    halloween = [2013, 10, 31];
})(allHallowsEve);

// shadowing. outer value of allHallowsEve was not changed
// we just rebound the name within the inner environment

(function (halloween) {
    halloween[0] = 2013;
})(allHallowsEve);
allHallowsEve
// you can reassign new values to bindings as well as 
// to elements of arrays and objects
// const does not prevent us from MUTATING, only from REBINDING ITS NAME
