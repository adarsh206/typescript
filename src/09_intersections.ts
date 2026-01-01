


// value must be everything from A to B

type Inter1 = { id: string };
type Inter2 = { createdAt : Date };

type Entity = Inter1 & Inter2; // must have both id and createdAt

const e : Entity = {
    id : "e1",
    createdAt : new Date()
}

type NumberHolderUnique = { a : number }
type StringHolder = { a : string }

// type NumberStringMix = NumberHolderUnique & StringHolder; // never, cannot be both number and string 
// const bad  :  NumberStringMix = { a : 123 }

type Product = { id: string, title: string}
type Priced = { price : number }

type PricedProduct = Product & Priced;