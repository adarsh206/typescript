"use strict";
// interfaces -> named shape for objects
const User333 = {
    id: '11',
    name: 'adarsh',
    createdAt: new Date(),
    email: 'adarsh@example.com'
};
const admin333 = {
    id: '2',
    name: 'adarsh as admin',
    createdAt: new Date(),
    email: "adarsh@example.com",
    permissions: ['admin'],
};
const adminWithMeta333 = {
    id: '2',
    name: "adarsh as admin",
    createdAt: new Date(),
    email: "adarsh@example.com",
    permissions: ['admin'],
    meta: {
        active: true
    }
};
// useful where type aliases might get complex and giving shape & reuse is needed 
// and extending is needed and also to model the real world entities
