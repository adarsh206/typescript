"use strict";
// interface -> object shapes that you expect to extend
// supports declaration merging
// this is called declaration merging where interfaces with same name get merged with different fields or properties
const boxDemo = {
    width: 10,
    height: 20
};
// type Bag = { size : number }
// type Bag = { color : number }
// can't redeclare type alias with same name twice -> error: Duplicate identifier 'Bag'.
