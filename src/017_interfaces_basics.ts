

// interfaces -> named shape for objects

interface User333 {
    id : string;
    name : string;
    email? : string; // optional field
    readonly createdAt : Date; // readonly field
}

const User333 : User333 = {
    id : '11',
    name : 'adarsh',
    createdAt : new Date(),
    email : 'adarsh@example.com'
};

interface Admin333 extends User333 {
    permissions : string[];
}

const admin333 : Admin333 = {
    id : '2',
    name : 'adarsh as admin',
    createdAt : new Date(),
    email : "adarsh@example.com",
    permissions : ['admin'],
};

interface WithMeta1 {
    meta : {
        active : boolean;
    }
}

interface AdminWithMeta extends Admin333, WithMeta1 {}

const adminWithMeta333 : AdminWithMeta = {
    id : '2',
    name : "adarsh as admin",
    createdAt : new Date(),
    email : "adarsh@example.com",
    permissions : ['admin'],
    meta : {
        active : true
    }
}

// useful where type aliases might get complex and giving shape & reuse is needed 
// and extending is needed and also to model the real world entities