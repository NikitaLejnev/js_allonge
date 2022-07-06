// js allows us to shadow variables in a way
// that guards us from shadowing when we move code around
(() => {
    let age = 49;

    if (true) {
        const age = 50;
    }
    age = 51;
    return age;
})()

(() => {
    const age = 49;

    if (true) {
        let age = 50;
    }
    age = 52;
    return age;
})()
// shadowing a const with let does NOT let us to rebind it
// in its original scope