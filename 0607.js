"use strict";

function makeAccount(accountNumber) {
  return {
    balance: 0.00,
    number: accountNumber,
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

function makeBank() {
  var accountNumber = 100;

  return {
    accounts: [],

    openAccount: function() {
      accountNumber += 1;
      var account = makeAccount(accountNumber);
      this.accounts.push(account);
      return account;
    }
  };
}

/* eslint-disable no-magic-numbers */

var bank = makeBank();
var account1 = bank.openAccount();
var account2 = bank.openAccount();

console.log(bank);
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
