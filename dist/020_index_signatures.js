"use strict";
const counters = {};
counters['clicks'] = 10;
counters['views'] = 20;
counters['likes'] = 5;
// and limited keys will be there which is present in Record scope
const mm = {
    likes: 100,
    shares: 50,
    comments: 25
    // views : 200 // Error: Object literal may only specify known properties, and 'views' does not exist in type 'Metrics'.
};
const priceMap = new Map();
priceMap.set('likes', 11);
priceMap.set('banana', 0.8);
const lm = {};
lm["x"] = undefined;
lm["y"] = 10;
lm["z"] = 20;
// lm["a"] = "hello"; // Error: Type 'string' is not assignable to type 'number | undefined'
