class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(point){
       return new Point(this.x + point.x, this.y + point.y);
    }

}

console.log(new Point(2, 3).plus(new Point(3, 2)));