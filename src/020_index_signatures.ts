


type NumberDict = { [K : string] : number}

const counters : NumberDict = {}
counters['clicks'] = 10;
counters['views'] = 20;
counters['likes'] = 5;
// counters['views'] = "20"; // Error: Type 'string' is not assignable to type 'number'

type Metrics = Record<'likes' | 'shares' | 'comments', number>; // key is string and value is number, tight and safer 
// and limited keys will be there which is present in Record scope

const mm : Metrics = {
    likes : 100,
    shares : 50,
    comments : 25
    // views : 200 // Error: Object literal may only specify known properties, and 'views' does not exist in type 'Metrics'.
}

const priceMap = new Map<string, number>();
priceMap.set('likes', 11);
priceMap.set('banana', 0.8);
// priceMap.set('orange', 'cheap'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

type LooseMap = Record<string, number | undefined>;
const lm : LooseMap = {};
lm["x"] = undefined;
lm["y"] = 10;
lm["z"] = 20;
// lm["a"] = "hello"; // Error: Type 'string' is not assignable to type 'number | undefined'