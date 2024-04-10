type Bt7 = number | [] | {}; 

function checkType(n:Bt7) {
    if (typeof n === 'number'){
        return "number";
    } else if (Array.isArray(n)) {
        return "array";
    } else if (typeof n === 'object' && !Array.isArray(n)){
        return "object";
    }
}

let a: number = 1;
let b: Bt7 = [1,2,3];
let c:  {
    id:number,
    name:string,
} = {
    id:1,
    name:"hoang",
}

console.log(checkType(a));
console.log(checkType(b));
console.log(checkType(c));


