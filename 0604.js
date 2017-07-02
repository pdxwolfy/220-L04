"use strict";

var account = {
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

/* eslint-disable no-magic-numbers */

console.log(account);
console.log(account.deposit(42));    // 42
console.log(account.balance);        // 42
console.log(account.deposit(23));    // 23
console.log(account.balance);        // 65
console.log(account.withdraw(47));   // 47
console.log(account.balance);        // 18
console.log(account.withdraw(19));   // 18
console.log(account.balance);        // 0
console.log(account.withdraw(18));   // 0
console.log(account.balance);        // 0
console.log(account.transactions);
