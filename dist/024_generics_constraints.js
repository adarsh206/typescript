"use strict";
// <T> -> constraints T so that only certain shapes are allowed
// <T extends X>
// key constraints -> <K extends keyof T> -> k must be a key of T
// .length
function leN4(xN4) {
    return xN4.length;
}
console.log(leN4('hello'));
console.log(leN4([1, 2, 3]));
console.log(leN4({ length: 10, tag: 'ok' }));
function userN6Extract(arrN4, keyN4) {
    return arrN4.map(item => item[keyN4]);
}
const usersN6 = [
    {
        id: '1', name: 'name1', age: 22
    },
    {
        id: '2', name: 'name2'
    }
];
console.log(userN6Extract(usersN6, 'id'));
console.log(userN6Extract(usersN6, 'name'));
// console.log(userN6Extract(usersN6, 'address')) // will give error because address is not present as key in usersN6 array
// whatever key are passing must be present in array or object whatever it is given or mention
