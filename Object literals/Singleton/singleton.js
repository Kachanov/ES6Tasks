var ids = {
    next: 0,
    get(){
        return this.next++;
    }
};

console.log(ids.get());
// → 0
console.log(ids.get());
// → 1
console.log(ids.get());
console.log(ids.get());
console.log(ids.get());
console.log(ids.get());