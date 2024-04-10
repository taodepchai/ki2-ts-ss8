// function check2(a: number | number[] | string): number | number[] |undefined {
//     if (typeof a === 'number') {
//         return a ; 
//     } else if (Array.isArray(a)) {
//         return a.reduce((sum: number, item: number) => sum + item, 0); 
//     } else if (typeof a === 'string'){
//         return a.length ;
//     }
// }

function check2(a: number | number[] | string): number | number[]  {
    if (typeof a === 'number') {
        return a ; 
    } else if (Array.isArray(a)) {
        return a.reduce((sum: number, item: number) => sum + item, 0); 
    } else {
        return  typeof a === 'string' ? a.length : 0;
    }
}

console.log(check2(123));
console.log(check2([1,2,3,4,5]));
console.log(check2("bacca"));
