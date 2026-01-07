"use strict";
class BankAccount {
    owner;
    balance = 0;
    #otp = 12345; // consider as private
    constructor(owner) {
        this.owner = owner;
    }
    deposit(amt) {
        if (amt < 0)
            throw new Error('amount must be positive');
        this.balance += amt;
    }
    getBalance() {
        return this.balance;
    }
    verifyOtp(code) {
        return this.#otp === code; // only accessible inside the class
    }
}
const acc = new BankAccount("Adarsh");
acc.deposit(5000);
console.log(acc.getBalance());
// acc.balance // it will give error as it is private and only accessible inside the class
// acc.#otp // it will give error as it is private and only accessible inside the class
