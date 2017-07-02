"use strict";

var account = {
  balance: 0.00,

  deposit: function(amount) {
    this.balance += amount;
    return amount;
  }
};

/* eslint-disable no-magic-numbers */

console.log(account);
console.log(account.deposit(42));    // 42
console.log(account.balance);        // 42
console.log(account.deposit(23));    // 23
console.log(account.balance);        // 65
