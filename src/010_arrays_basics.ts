


const a11 : number[] = [1, 2, 3] // T[]
const a22 : Array<number> = [1, 2, 3]  // Array<T>
const a33 : readonly number[] = [1, 2, 3] // readonly T[]

const scores = [10,20, 30];
// scores.push("40") // Error, string not assignable to number

const mix : (string | number)[] =  [1, '2', 3, '4']

