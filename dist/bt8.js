"use strict";
function combineObjects(obj1, obj2) {
    let combinedObject = {
        name: obj1.name,
        type: obj2.type,
    };
    return combinedObject;
}
let dog1 = {
    name: "aaa",
};
let bird = {
    type: "bbbb",
};
let combinedObject = combineObjects(dog1, bird);
console.log(combinedObject);
