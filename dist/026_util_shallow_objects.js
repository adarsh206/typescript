"use strict";
// partial<T> -> make all the top level fields optional
const patch10 = { name: 'adarsh' }; // if you will not pass some of the property it will not throw any error 
// but pass the value with the same datatypes which is how defined above
const patch11 = { address: { line1: 'line1', city: 'ci' } };
const userAllPatch11 = {
    id: 'u2',
    name: 'name2',
    address: {
        line1: 'line2',
        city: 'city2'
    },
    email: "test"
};
const readonlyUser = {
    id: 'u3',
    name: 'name',
    address: {
        line1: 'line3',
        city: 'city123'
    }
};
const publicUser = {
    id: 'u5',
    name: 'adarsh'
};
const omitUserN10 = {
    id: 'u4',
    name: 'name5',
    address: {
        line1: 'd',
        city: 'f'
    }
};
const dirN10 = {
    admin: { id: 'u110', name: 'admin', address: { line1: "line1", city: "city3" } },
    user: { id: 'u111', name: 'user', address: { line1: "line1", city: "city3" } },
    editor: { id: 'u112', name: 'editor', address: { line1: "line1", city: "city3" } }
};
