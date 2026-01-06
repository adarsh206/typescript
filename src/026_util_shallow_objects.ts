

// partial<T> -> make all the top level fields optional

type AddressN8 = {
    line1 : string;
    city : string;
}

type User10 = {
    id: string;
    name : string;
    email? : string;
    address : AddressN8
}

type UserPatch10 = Partial<User10>

const patch10 : UserPatch10 = { name : 'adarsh'} // if you will not pass some of the property it will not throw any error 
// but pass the value with the same datatypes which is how defined above

const patch11 : UserPatch10 = { address  : { line1 : 'line1', city : 'ci'}}

// const patch11 : UserPatch10 = { address  : { line1 : 'line1', city : 'ci', town : 'town' }} // it will throw error because town is not present in the address defined above


// Required<T>

type UserAllRequiredN10 = Required<User10>

const userAllPatch11 : UserAllRequiredN10 = {
    id : 'u2',
    name : 'name2',
    address : {
        line1 : 'line2',
        city : 'city2'
    },
    email : "test"
}
// In Required have to pass all the mentioned parameters whether it is optional or not


// ReadOnly<T>

type ReadOnlyUserN10 = Readonly<User10>


const readonlyUser : ReadOnlyUserN10 = {
    id : 'u3',
    name : 'name',
    address : {
        line1 : 'line3',
        city : 'city123'
    }

}

// readonlyUser.name = 'this' // can't change the name value because it is defined as readonly

// Pick<T, K> -> kep only some keys

type PublicUserN10 = Pick<User10, "id" | "name">

const publicUser : PublicUserN10 = {
    id : 'u5',
    name : 'adarsh'
}

// const publicUser2 : PublicUserN10 = {
//     id : 'u5',
//     name : 'adarsh',
//     email : 'test'
// }
// it will throw error because it will not take email because it is not mentioned in PublicUserN10 type


// Omit<T, K> -> remove some keys

type UserWithoutEmailN10 = Omit<User10, "email">

const omitUserN10 : UserWithoutEmailN10 = {
    id : 'u4',
    name : 'name5',
    address : {
        line1 : 'd',
        city : 'f'
    }
}

// omitUserN10.email = 'that'  // it will not change the value of email because omitUserN10 does not have email property


// Record<K, V>

type RoleK = 'admin' | 'user' | 'editor'
type RoleCheck = Record<RoleK, User10>

const dirN10 : RoleCheck = {
    admin : { id : 'u110', name : 'admin', address : { line1 : "line1", city : "city3" }},
    user : { id : 'u111', name : 'user', address : { line1 : "line1", city : "city3" }},
    editor : { id : 'u112', name : 'editor', address : { line1 : "line1", city : "city3" }}
}