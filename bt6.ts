type Arr = number | string;

function check1(a: string | Arr[]): string | Arr[] {
    if (typeof a === 'string') {
        return a ; 
    } else {
        return a; 
    }
}

console.log(check1("abcd"));
console.log((check1(["a",2,3,4])));

