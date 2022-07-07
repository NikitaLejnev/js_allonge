let Queue = () => {
    const queue = {
        array: [],
        head: 0,
        tail: -1,
        pushTail (value) {
            return queue.array[++queue.tail] = value
        },
        pullHead() {
            if (queue.tail >= queue.head) {
                const value = queue.array[queue.head];
                queue.array[queue.head] = undefined;
                queue.head += 1;
                return value
            }
        },
        isEmpty() {
            return queue.tail < queue.head;
        }
    }
    return queue
}

// we will copy with Object.assign
const copyOfQueue = Object.assign({}, queue);
queue !== copyOfQueue

// but arrays are references, probably copied a reference to the original one
// let's copy the array as well
copyOfQueue.array = [];
for (let i = 0; i < 2; ++i) {
    copyOfQueue.array[i] = queue.array[i]
}

queue.pullHead();
copyOfQueue.pullHead();
// for some reason, two queues act like aliases of each other
// we did copy our elements, however closures share the environment
// so the functions in one queue operate on other queue's private data

// imagine this
let AmnesiacQueue = () => ({
    array: [],
    head: 0,
    tail: -1,
    pushTail (myself, value) {
        return myself.array[++myself.tail] = value
    },
    pullHead(myself) {
        if (myself.tail >= myself.head) {
            const value = myself.array[myself.head];
            myself.array[myself.head] = undefined;
            myself.head += 1;
            return value
        }
    },
    isEmpty(myself) {
        return myself.tail < myself.head;
    }
})

const queueWithAmnesia = AmnesiacQueue();

queueWithAmnesia.pushTail(queueWithAmnesia, 'Hello');
queueWithAmnesia.pushTail(queueWithAmnesia, 'JavaScript');
queueWithAmnesia.pullHead(queueWithAmnesia);
