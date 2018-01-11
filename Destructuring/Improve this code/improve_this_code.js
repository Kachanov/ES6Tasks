function detectCollision(rectangle) {

    let {x, y, width, height} = rectangle;

    if(point.x >= x && point.x <= x + width && point.y >= y && point.y <= y + height){
            return true;
    }

}

const myObjects = [
    {x:  10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x:   0, y:  0, width: 10, height:  5}
];


let point = {
    x: 4,
    y: 2
};

console.log(myObjects.find(detectCollision));
