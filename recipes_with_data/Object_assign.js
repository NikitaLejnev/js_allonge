// we can extend objects by assigning properties to them
const inventory = {
    apples: 12,
    oranges: 12
};

inventory.bananas = 54;
inventory.pears = 24;

// we can also assign properties of one object to another
for (let fruit in shipment) {
    inventory[fruit] = shipment[fruit]
}

// both can be done with Object.assign()
// you can copy an object by extending an empty object
Object.assign({}, {
    apples: 12,
    oranges: 12
})

// and you can extend one object with another
const shipment = {
    bananas: 54,
    pears: 24
}

Object.assign(inventory, shipment)

// a taste of what's to come in prototypes section
// we can turn this
let Queue = function () {
    this.array = [];
    this.head = 0;
    this.tail = -1
};

Queue.prototype.pushTail = function (value) {}
Queue.prototype.pullHead = function () {}
Queue.prototype.isEmpty = function () {}

// into this
Queue = function () {
    Object.assign(this, {
        array: [],
        head: 0,
        tail: -1
    })
};

Object.assign(Queue.prototype, {
    pushTail(value) {},
    pullHead() {},
    isEmpty() {},
})

// assigning properties of one object to another is a.k.a. cloning or shallow copying
// it is a building block for more advanced things like mixins