"use strict";
// ReturnType<F>
// Parameters<F>
// InstanceType<Ctor>
// ConstructorParameters<C>
function ExtractUserInfo(id, isExtraInfo = false) {
    return {
        id,
        name: "Adarsh",
        log: isExtraInfo ? "details" : undefined
    };
}
const argsInfo = ["u10", true];
const resultInfo = ExtractUserInfo(...argsInfo);
class PersonN1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi I am this -> ${this.name}`;
    }
}
const resultInfo1 = ["adarsh", 27];
const abc = new PersonN1(...resultInfo1);
console.log(abc.greet());
