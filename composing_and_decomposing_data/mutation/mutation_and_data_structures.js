// a common pattern is to be liberal with mutation when constructing data
// and to be conservative with mutation when consuming data

const OneToFive = [1, 2, 3, 4, 5];
OneToFive

const [a, b, ...ThreeToFive] = OneToFive;
ThreeToFive

ThreeToFive[0] = "three";
ThreeToFive[1] = "four";
ThreeToFive[2] = "five";

ThreeToFive
OneToFive

// gathering with rest operator is slower but safer, since we copy values
// it is harder to reason about immutable data
