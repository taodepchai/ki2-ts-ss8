"use strict";
function checkType(n) {
    if (typeof n === 'number') {
        return "number";
    }
    else if (Array.isArray(n)) {
        return "array";
    }
    else if (typeof n === 'object' && !Array.isArray(n)) {
        return "object";
    }
}
let a = 1;
let b = [1, 2, 3];
let c = {
    id: 1,
    name: "hoang",
};
console.log(checkType(a));
console.log(checkType(b));
console.log(checkType(c));
