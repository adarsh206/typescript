"use strict";
function greetPersonOptional(name) {
    const upperRes = name ? name?.toUpperCase() : "Guest";
    return `Hello ${upperRes}`;
}
console.log(greetPersonOptional("adarsh")); // Hello ADARSH
console.log(greetPersonOptional()); // Hello Guest
function greetPersonDefault(name = "Default") {
    return `Hello ${name.toUpperCase()}`;
}
console.log(greetPersonDefault("adarsh")); // Hello ADARSH
console.log(greetPersonDefault()); // Hello Guest
function connect(host, port, secure) {
    const p = port ?? 80;
    const s = secure ?? false;
    return `Connect ${host} ${p} ${secure}`;
}
connect("localhost", 100, true);
