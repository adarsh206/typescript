"use strict";
// Exclude<U, V> -> remove from U those member assignable to V
// Extract<U, V> -> keep from U those members assignable to V
function handleEvent(e) {
    console.log(e);
}
handleEvent("click");
function handleEvent2(e) {
    console.log(e);
}
handleEvent2("update");
function square(num) {
    return num * 2;
}
square(10);
// square(null) // will give error because it is only taking number because of NonNullable
