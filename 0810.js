"use strict";

function makeAccount(accountNumber) {
  var balance = 0.00;
  var number = accountNumber;
  var transactions = [];

  return {
    balance: function() {
      return balance;
    },

    deposit: function(amount) {
      this.balance += amount;
      this.record("deposit", amount);
      return amount;
    },

    number: function() {
      return number;
    },

    record: function(type, amount) {
      transactions.push({ type: type, amount: amount });
    },

    transactions: function() {
      return transactions;
    },

    withdraw: function(amount) {
      if (amount > balance) {
        amount = balance;
      }

      balance -= amount;
      this.record("withdrawal", amount);
      return amount;
    }
  };
}

function makeBank() {
  var accountNumber = 100;
  var accounts = [];

  return {
    openAccount: function() {
      accountNumber += 1;
      var account = makeAccount(accountNumber);
      accounts.push(account);
      return account;
    },

    transfer: function(accountFrom, accountTo, amount) {
      amount = accountFrom.withdraw(amount);
      return accountTo.deposit(amount);
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
console.log(bank.transfer(account1, account2, 8));
console.log(bank);
console.log(account1);
console.log(account2);
