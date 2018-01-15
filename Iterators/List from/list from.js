class List {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    map(f) {
        return new List(f(this.head), this.tail && this.tail.map(f));
    }

    [Symbol.iterator]() {
        let currentElement = this;
        return {
            next: () => {
                if (currentElement) {
                    let value = currentElement.head;
                    currentElement = currentElement.tail;
                    return {
                        done: false,
                        value: value
                    }
                }else {
                    return{
                        done: true
                    };
                }
            }
        }
    }


}

let list = new List("x", new List("y", new List("z", null)));


for (let elt of list) console.log(elt)