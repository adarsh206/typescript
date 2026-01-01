"use strict";
// email? : string -> email may be absent , but if it is present it will be string
// it is not same as email : string | undefined
const user1 = {
    id: "u1",
    name: "adarsh",
    createdAt: new Date()
};
const user2 = {
    id: "u2",
    name: "shivam",
    createdAt: new Date(),
    email: "shivam@email.com"
};
// user1.createdAt = new Date(); // Error : cannot reassign readonly property
console.log(user1);
console.log(user2);
const c1 = {
    whatever: 1,
};
const c2 = {
    likes: 10,
    comments: 5,
    shares: 2
};
