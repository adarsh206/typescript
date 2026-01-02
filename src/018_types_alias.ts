
// types uses are listed below:
// object shapes -> similar to interfaces
// union types ( A | B)
// intersection types ( A & B)

// type aliases -> named shape for objects

type Person1 = {
    id : '1'
    address : 'address',
    salary : 1234

};

type Status = "new" | "paid" | "pending";

function nextActionCheck(s : Status) : string {
    
    switch(s) {
        case "new" :
            return "new";
        case "paid" :
            return "paid";
        case "pending" :
            return "pending";    
    
        default :
            return "default";
    }
}

type ToMerge1 = { price : number };
type ToMerge2 = { stock : number };

type MergedProductInfo = Person1 & ToMerge1 & ToMerge2;

const mergedProductInfo : MergedProductInfo = {
    id : '1',
    address : 'address',
    salary : 1234,
    price : 100,
    stock : 50
};
