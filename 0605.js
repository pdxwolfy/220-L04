"use strict";

function makeAccount() {
  return {
    balance: 0.00,
    transactions: [],

    deposit: function(amount) {
      this.balance += amount;
      this.record("deposit", amount);
      return amount;
    },

    record: function(type, amount) {
      this.transactions.push({ type: type, amount: amount });
    },

    withdraw: function(amount) {
      if (amount > this.balance) {
        amount = this.balance;
      }

      this.balance -= amount;
      this.record("withdrawal", amount);
      return amount;
    }
  };
}

/* eslint-disable no-magic-numbers */

var account1 = makeAccount();
var account2 = makeAccount();

console.log(account1);
console.log(account2);
console.log(account1.deposit(42));    // 42
console.log(account1.deposit(23));    // 23
console.log(account1.withdraw(47));   // 47
console.log(account1);                // 18
console.log(account2.deposit(42));    // 42
console.log(account2.withdraw(23));   // 23
console.log(account2.withdraw(47));   // 19
console.log(account2);                // 0
