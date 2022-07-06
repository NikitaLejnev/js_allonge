// factoring is dividing components into subcomponents
// the easiest js way is to use separate values
// and put them into methods or closures

// a model that support undo and redo
// it is composed of a pair of stacks and a POJO

// shallowCopy is NOT suitable for production
// deal with deep copies and own keys first
let shallowCopy = (source) => {
    const dest = {};
    for (let key in source) {
        dest[key] = source[key]
    }
    return dest
};

let Stack = () => {
    const array = [];
    let index = -1;

    return {
        push(value) {
            array[index += 1] = value
        },
        pop() {
            let value = array[index];
            if (index >= 0) {
                index -= 1
            }
            return value
        },
        isEmpty() {
            return index < 0
        }
    }
}

let Model = function (initialAttributes) {
    const redoStack = Stack(),
        obj = {
            set: (attrsToSet) => {
                undoStack.push(shallowCopy(attributes));
                if (!redoStack.isEmpty()) {
                    redoStack.length = 0;
                }
                for (let key in (attrsToSet || {})) {
                    attributes[key] = attrsToSet[key]
                }
                return obj
            },
            undo: () => {
                if(!undoStack.isEmpty()) {
                    redoStack.push(shallowCopy(attributes));
                    attributes = undoStack.pop()
                }
                return obj
            },
            redo: () => {
                if (!redoStack.isEmpty()) {
                    undoStack.push(shallowCopy(attributes));
                    attributes = redoStack.pop()
                }
                return obj
            },
            get: (key) => attributes[key],
            has: (key) => attributes.hasOwnProperty(key),
            attributes: () => shallowCopy(attributes),
        };
    return obj
};

const model = Model();
model.set({"Doctor": "de Grasse"});
model.set({"Doctor": "Who"});
model.undo()
model.get("Doctor")
// encapsulation tecniques work well with composition