


class BankAccount {
    public owner : string

    private balance = 0;

    #otp = 12345 // consider as private

    constructor(owner : string){
        this.owner = owner
    }

    deposit(amt : number){
        if(amt < 0) throw new Error('amount must be positive')
            this.balance += amt
    }

    getBalance(){
        return this.balance
    }

    verifyOtp(code : number){
        return this.#otp === code // only accessible inside the class
    }
}


const acc = new BankAccount("Adarsh")
acc.deposit(5000)
console.log(acc.getBalance())


// acc.balance // it will give error as it is private and only accessible inside the class
// acc.#otp // it will give error as it is private and only accessible inside the class