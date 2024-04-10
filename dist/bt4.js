"use strict";
function check(a) {
    if (typeof a === 'number') {
        return a * a;
    }
    else {
        return a.map((item) => item * item);
    }
}
console.log(check(2));
console.log(check([1, 2, 3, 4]));
