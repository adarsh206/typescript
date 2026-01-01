"use strict";
// value -> this OR that
function printId(id) {
    // if(typeof id === 'string'){
    //     id.toUpperCase()
    // }
    // else{
    //     id.toFixed(2)
    // }
}
function describeUser(u) {
    if (u.role === "Admin") {
        console.log(u.permissions);
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
describeUser({ role: "Admin", permissions: ["manage-users"] });
function describeUserWithInOperator(u) {
    if ('permissions' in u) {
        console.log(u.role, 'Admin User');
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
describeUserWithInOperator({ role: "Customer", loyaltyPoints: 1500 });
// array of unions and unions of arrays
const arrOfUnion = ["a", 1, "b", 2];
const unionOfArrays = Math.random() > 0.5 ? ["x", "y"] : [1, 2, 3];
// unionOfArrays.push(100); // okay, could be number[]
// unionOfArrays.push("z"); // Error, could be number[]
