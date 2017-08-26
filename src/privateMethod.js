function budget () {
    let balance = 0;

    let deposit = (val) => {
        balance += val;
    }

    let withdraw = (val) => {
        balance -= val;
    }

    let checkBalance = () => balance;

    return { deposit, withdraw, checkBalance };
}

let myBudget = budget();
myBudget.deposit(500);
myBudget.withdraw(200);
console.log(myBudget.checkBalance());//300
console.log(myBudget.balance);//undefined