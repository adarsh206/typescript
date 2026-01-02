// inference example
const doubleFunc = (n) => n * 2;
// explicit return for exported/public functions
export function toTitle(s) {
    return `Hello ${s}`;
}
function booleanToNumber(flag) {
    if (flag) {
        return 1;
    }
    else {
        return 0;
    }
}
async function loadCountInferred() {
    return 45; // inferred return type Promise<number>
}
loadCountInferred().then(n => console.log((n)));
