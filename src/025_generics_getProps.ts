

type UserN7 = {
    id : string;
    name : string;
    email? : string; // T['email']
    phone? : number;
}

function getUserPropN7<T, K extends keyof T>(objN7 : T, keyN7 : K) : T[K] {
    return objN7[keyN7]
}


const uN7 : UserN7 = {
    id : 'u1', name : 'adarsh'
}



const idValN7 = getUserPropN7(uN7, 'id') // id must be present in uN7
const idValN8 = getUserPropN7(uN7, 'email')

// const idValN9 = getUserPropN7(uN7, 'phone') // will throw error as phone as key is not present in un7 object


function setUserPropN7<T, K extends keyof T>(objN7 : T, keyN7 : K, newVal : T[K]) : void{ objN7[keyN7] = newVal } // it will change the value of the key passed

setUserPropN7(uN7, 'name', 'shivam')
setUserPropN7(uN7, 'phone', 100)