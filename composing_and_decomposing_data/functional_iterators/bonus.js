const firstInIteration = (fn, iterator) =>
    take(filterIteratorWith(fn, iterator), 1);
// it stops after finding a selected element

const firstInArray = (fn, array) => array.filter(fn)[0]
// this would apply fn to every elment

// CAVEAT
// iterators are stateful
// they return decorated references,
// so traversing new decorators changes the old ones
// if you pass a iterator to function, you no longer own the iterator
// its state is either changed or will change