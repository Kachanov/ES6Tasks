class Queue {
    constructor() {
        this[Symbol.for("content")] = [];
    }

    put(elt) {
        return this[Symbol.for('content')].push(elt);
    }

    take() {
        return this[Symbol.for('content')].shift();
    }
}


let queue = new Queue();
queue.put(1);
queue.put(2);
console.log(queue.take());
console.log(queue.take());