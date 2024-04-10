type Square = {
    kind: 'square';
    sideLength: number;
};

type Circle = {
    kind: 'circle'
    radius:number;
}

function calculateArea(shape:Square|Circle):number{
    if (shape.kind === 'square'){
        return shape.sideLength* shape.sideLength;
    } else {
        return Math.PI *shape.radius *shape.radius;
    }
}
let square: Square = {
    kind:'square',
    sideLength:4,
}
console.log(calculateArea(square));

let circle: Circle = {
    kind:'circle',
    radius:4,
}

console.log(calculateArea(circle));

