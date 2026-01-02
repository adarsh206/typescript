"use strict";
// typeof for primitives
function describeTypeOf(x) {
    if (typeof x === 'number') {
        return "number";
    }
    if (typeof x === 'string') {
        return "string";
    }
    if (typeof x === 'boolean') {
        return "boolean";
    }
    if (typeof x === 'bigint') {
        return "bigint";
    }
    if (typeof x === 'symbol') {
        return "symbol";
    }
    if (typeof x === 'undefined') {
        return "undefined";
    }
    if (typeof x === 'function') {
        return "function";
    }
    if (typeof x === null) {
        return "object";
    }
    if (x === null)
        return null;
    return "object";
}
console.log(describeTypeOf(42)); // "number"
console.log(describeTypeOf("hello")); // "string"
console.log(describeTypeOf(true)); // "boolean"
console.log(describeTypeOf(undefined)); // "undefined"
console.log(describeTypeOf(null)); // "object"
console.log(describeTypeOf(Symbol("id"))); // "symbol"
console.log(describeTypeOf(10n)); // "bigint"
console.log(describeTypeOf(function () { })); // "function"
console.log(describeTypeOf(() => { })); // "function"
console.log(describeTypeOf({})); // "object"
console.log(describeTypeOf([])); // "object"    
function info(z) {
    if (Array.isArray(z)) {
        return z;
    }
    if (z instanceof Date) {
        return new Date();
    }
    if (z instanceof Error) {
        return new Error("Error Occurred");
    }
    return 'other';
}
console.log(info([1, 2, 3]), info(new Date()), info(new Error("Oops! Error Occurred")), info({ x: 1 }));
