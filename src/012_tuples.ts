

// tuples -> fixed length array with specific types
// not same as (string | number)[]
// optional tuples

const userEntry : [string, number] = ['adarsh', 27]

// const userEntry : [string, number] = ['adarsh', 27, "kumar"] // error  extra element 
// const userEntry : [string, number] = ['adarsh'] // error not enough elements

type ResponseRow = [status: number, message? : string]

const r11 : ResponseRow = [200, "ok"]
const r12 : ResponseRow = [404]

const corners : readonly [number, number] = [0, 0];