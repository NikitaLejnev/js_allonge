let BetterQueue = () => ({
    array: [],
    head: 0,
    tail: -1,
    pushTail (value) {
        return this.array[++this.tail] = value
    },
    pullHead() {
        if (this.tail >= this.head) {
            const value = this.array[this.head];
            this.array[this.head] = undefined;
            this.head += 1;
            return value
        }
    },
    isEmpty() {
        return this.tail < this.head;
    }
})
// every time you invoke a function that is a member of an object
// that object is bound to this in the environment of the function

const betterQueue = BetterQueue();

const copyOfQueue = Object.assign({}, betterQueue)
copyOfQueue.array = []
for (let i = 0; i < 2; ++i) {
    copyOfQueue.array[i] = betterQueue.array[i]
}

betterQueue.pullHead()
copyOfQueue.pullHead()
// functions with this are more portable between objects, unlike closure functions