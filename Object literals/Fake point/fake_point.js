class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(other){
        return new Point(this.x + other.x, this.y + other.y);
    }
}

var fakePoint = {
    __proto__: Point.prototype,
    x: 5,
    y: 5
};

console.log(fakePoint);
console.log(fakePoint instanceof Point);