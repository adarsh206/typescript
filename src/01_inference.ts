// goal -> understand when to let Typescript infer types
// ts -> js knows very well
// when ts will writes the types / u r going to write

let count = 0; // ts sees numbers
const site = "typescript" // ts sees the exact literal "typescript"
const scores = [10, 20, 30]

// over annotation isn't bad -> just noisy


export function add(a : number, b : number) : number{
    return a + b
}

console.log(add(5, 2))

// you should also annotate when the type is not obvious

let maybe : string | number;
maybe = Math.random() > 0.5 ? "test" : 10