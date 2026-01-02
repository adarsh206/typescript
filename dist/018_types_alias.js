"use strict";
// types uses are listed below:
// object shapes -> similar to interfaces
// union types ( A | B)
// intersection types ( A & B)
function nextActionCheck(s) {
    switch (s) {
        case "new":
            return "new";
        case "paid":
            return "paid";
        case "pending":
            return "pending";
        default:
            return "default";
    }
}
const mergedProductInfo = {
    id: '1',
    address: 'address',
    salary: 1234,
    price: 100,
    stock: 50
};
