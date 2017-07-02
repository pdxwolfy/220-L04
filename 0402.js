"use strict";

var total = 0;

var add = function (value) {
  total += value;
  console.log(total);
};

var subtract = function (value) {
  total -= value;
  console.log(total);
};

/* eslint-disable no-magic-numbers */

add(1);
add(42);
subtract(39);
add(6);
