// js allows us to rebind new values to parameters
const evenStevens = (n) => {
    if (n === 0) return true;
    else if (n === 1) return false;
    else {
        n -= 2;
        //  rebinding n
        return evenStevens(n);
    }
}

evenStevens(42)

evenStevens = (n) => {
    if (n === 0) return true;
    else if (n === 1) return false;
    return evenStevens(n - 2);
}
// can't rebind a name bound with const
// 
(() => {
    let age = 49;
    if (true) {
      let age = 50;  
    } 
    return age;
})()
// 49
//
(() => {
    let age = 49;
    if (true) {
      age = 50;  
    } 
    return age;
})()
// 50
//