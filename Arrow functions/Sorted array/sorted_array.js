class SortedArray {

    constructor(compare) {
        this.content = [];
        this.compare = compare;
    }

    // [1,2] 3;
    findPos(element) {
        const index = this.content.findIndex(item => this.compare(element, item) <= 0);
        return element >= this.content[this.content.length - 1] ? this.content.length : index;
    }

    insert(element) {
        //this.content.push(element);  //5,1,2,4,3
        this.content.splice(this.findPos(element), 0, element); //3,4,2,1,5
    }


}

var sorted = new SortedArray(function(a, b) { return a - b });
sorted.insert(5);
sorted.insert(3);
sorted.insert(4);
sorted.insert(1);
sorted.insert(2);
console.log("array:", sorted.content);