function check(a: number | number[]): number | number[] {
    if (typeof a === 'number') {
        return a * a; 
    } else {
        return a.map((item: number) => item * item); 
    }
}

console.log(check(2));
console.log(check([1,2,3,4]));
