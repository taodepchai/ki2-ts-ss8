"use strict";
function calculateArea(shape) {
    if (shape.kind === 'square') {
        return shape.sideLength * shape.sideLength;
    }
    else {
        return Math.PI * shape.radius * shape.radius;
    }
}
let square = {
    kind: 'square',
    sideLength: 4,
};
console.log(calculateArea(square));
let circle = {
    kind: 'circle',
    radius: 4,
};
console.log(calculateArea(circle));
