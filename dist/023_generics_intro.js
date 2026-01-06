"use strict";
// understand what is "type  parameter" <T>
// how typescript infers <T> from your arguments automatically
// is a function -> the types are "blanks" -> you fill in later
// <T> is a placeholder
// TS will try to understand what T should be
function id(x) {
    return x;
}
//infers T
// id(5) -> T is a number
// id('string') -> T is a string
// id<number>(5)
const xyz = id(5);
console.log(xyz + 1, id('adarsh'), id(["adarsh"]));
function firstGen(arr) {
    return arr[0];
}
console.log(firstGen([1, 2, 3, 4]));
console.log(firstGen(["abc", "def", "fgh", "ijk"]));
// without generics -> (x : unknown) => unknown
// with generic : (x : T) => T // keeps the exact type
function wrap(value) {
    return { value };
}
