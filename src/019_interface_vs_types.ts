

// interface -> object shapes that you expect to extend
// supports declaration merging

// types => more general -> objects, unions, intersections , functions
// can not be reopened -> no merging
// type aliases -> more versatile, supports union and intersection types
// does not support declaration merging

interface Box1 {
    width : number
}

interface Box1 {
    height : number
}

// this is called declaration merging where interfaces with same name get merged with different fields or properties
const boxDemo : Box1 = {
    width : 10,
    height : 20
}

// type Bag = { size : number }
// type Bag = { color : number }
// can't redeclare type alias with same name twice -> error: Duplicate identifier 'Bag'.

