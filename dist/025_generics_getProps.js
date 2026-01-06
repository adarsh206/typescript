"use strict";
function getUserPropN7(objN7, keyN7) {
    return objN7[keyN7];
}
const uN7 = {
    id: 'u1', name: 'adarsh'
};
const idValN7 = getUserPropN7(uN7, 'id'); // id must be present in uN7
const idValN8 = getUserPropN7(uN7, 'email');
// const idValN9 = getUserPropN7(uN7, 'phone') // will throw error as phone as key is not present in un7 object
function setUserPropN7(objN7, keyN7, newVal) { objN7[keyN7] = newVal; } // it will change the value of the key passed
setUserPropN7(uN7, 'name', 'shivam');
setUserPropN7(uN7, 'phone', 100);
