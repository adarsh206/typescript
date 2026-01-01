

// email? : string -> email may be absent , but if it is present it will be string
// it is not same as email : string | undefined


type User = {
    id : string; // required
    name : string;
    email? : string; // optional (could be absent)
    readonly createdAt : Date; // cannot be reassigned

}

const user1 : User = {
    id : "u1",
    name : "adarsh",
    createdAt : new Date()
}

const user2 : User = {
    id : "u2",
    name : "shivam",
    createdAt : new Date(),
    email : "shivam@email.com"
}

// user1.createdAt = new Date(); // Error : cannot reassign readonly property

console.log(user1);
console.log(user2);


type User2 = {
    email? : string;
}

type User3 = {
    email : string | undefined;
}

type Count = {
    [k : string] : number
}

type Count1 = Record<"likes" | "comments" | "shares", number>;

const c1 : Count = {
    whatever : 1,
}

const c2 : Count1 = {
    likes : 10,
    comments : 5,
    shares : 2
}