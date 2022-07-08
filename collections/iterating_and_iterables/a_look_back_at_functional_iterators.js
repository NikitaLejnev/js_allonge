// a stack with a functional iterator method
let Stack1 = () =>
    ({
        array: [],
        index: -1,
        push(value) {
            return this.array[this.index += 1] = value;
        },
        pop() {
            const value = this.array[this.index];
            this.array[this.index] = undefined;
            if (this.index >= 0) {
                this.index -= 1
            }
            return value
        },
        isEmpty() {
            return this.index < 0
        },
        iterator() {
            let iterationIndex = this.index;

            return () => {
                // it's an arrow function, so we follow the rules of variable scoping
                // this is bound to the enclosing the arrow function
                if (iterationIndex > this.index) {
                    iterationIndex = this.index;
                }
                if (iterationIndex < 0) {
                    return { done: true };
                }
                else { 
                    return { done: false, value: this.array[iterationIndex--] }
                }
            }
        }
    });

let stack = Stack1();

stack.push("Greetings");
stack.push("to");
stack.push("you!");

const iter = stack.iterator();

console.log(iter().value)
console.log(iter().value)

// a sum function implemented as a fold over a functional iterators
const iteratorSum = (iterator) => {
    let eachIteration,
        sum = 0;
    
    while ((eachIteration = iterator(), !eachIteration.done)) {
        sum += eachIteration.value;
    }
    return sum
}

stack = Stack1();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(iteratorSum(stack.iterator()))

// if we presume that "everything is an object",
// we can write functions that work on objects
// the functions don't need to know the implementation details
// plus we can lazily traverse data
