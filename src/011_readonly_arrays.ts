

const xss = [1, 2, 3, 4]
const ys : readonly number[] = [1, 2, 3]
const yss : ReadonlyArray<number> = [4, 5, 6]


xss[0] = 9 // mutable
// ys.push(4) // Error: Property 'push' does not exist on type 'readonly number[]'.
// yss.pop()  // Error: Property 'pop' does not exist on type 'ReadonlyArray<number>'.
// yss.slice(0, 1)

console.log(xss)
console.log(ys, yss)


function sum (nums : readonly number[]) : number {
    let s = 0;
    for(const n of nums) s += n;
    return s;
}

console.log(sum(xss)); // passing mutable array in readonly param is allowed

const res = yss.map(n => n * 8)