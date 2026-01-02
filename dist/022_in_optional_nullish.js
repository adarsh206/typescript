"use strict";
function describeUserExample(u) {
    if ('permissions' in u) {
        return `Admin ${u.permissions.join(',')}`;
    }
    return `User ${u.expiresAt.toISOString()}`;
}
console.log(describeUserExample({ role: "Admin", permissions: ["read"] }));
const P1N3 = { name: 'John' };
const P2N3 = { name: 'Ben', contact: { email: 'ben@example.com' } };
const email1N3 = P1N3.contact?.email;
const email2N3 = P2N3.contact?.email;
// ?? -> uses the right hand default only if the left hand is null or undefined
// || -> uses the right default when the left is any false value (0, "", null, undefined, NaN)
const countFromServerN3 = 0;
const labelFromServerN3 = "";
const aN3 = countFromServerN3 ?? 100; // keeps the 0 
const bN3 = countFromServerN3 || 1200; // keeps the 1200
console.log(aN3, bN3);
