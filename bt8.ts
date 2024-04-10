type Dog = {
    name: string;
};

type Bird = {
    type: string;
};

function combineObjects(obj1: Dog, obj2: Bird): Dog & Bird {
    let combinedObject: Dog & Bird = {
        name: obj1.name,
        type: obj2.type,
    };
    return combinedObject;
}

let dog1: Dog = {
    name: "aaa",

};

let bird: Bird = {
    type: "bbbb",

};

let combinedObject = combineObjects(dog1, bird);
console.log(combinedObject);
