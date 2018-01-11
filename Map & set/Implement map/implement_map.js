class MyMap {
    constructor() {
        this.map = {};
    }

    set(element, value) {
        this.map[element] = value;
    }

    get(element){
        return this.map[element];
    }

    delete(element){
        delete this.map[element];
    }

    get size(){
        return Object.keys(this.map).length;
    }

    clear(){
        this.map = {};
    }
}

const names = new MyMap;
names.set(Array, "the array constructor");
names.set(Math, "the math object");
names.set(String, "the string object");
console.log(names.get(Array));
// → "the array constructor"
console.log(names.size);
// → 2
names.delete(Array);
console.log(names.get(Array));
// → undefined
names.clear();
console.log(names.get(Math));
// → undefined