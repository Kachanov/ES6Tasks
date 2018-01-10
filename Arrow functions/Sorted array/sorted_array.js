class SortedArray {

    constructor(compare) {
        this.content = [];
        this.compare = compare;
    }

    findPos(element) {
        for(var i = 0; i < this.content.length; i++) {
            if (this.compare(element, this.content[i]) < 0) {
                break;
            }
        }
        return i;
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
