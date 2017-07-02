"use strict";

var MAX = 100;

function makeMultipleLister(start) {
  return function countUp() {
    var value = start;
    while (value < MAX) {
      console.log(value);
      value += start;
    }
  };
}

/* eslint-disable no-magic-numbers */

var lister = makeMultipleLister(13);
lister();
console.log('*******************************************************');

lister = makeMultipleLister(7);
lister();
console.log('*******************************************************');
lister();
console.log('*******************************************************');

lister = makeMultipleLister(1);
lister();
console.log('*******************************************************');

lister = makeMultipleLister(7.47);
lister();
console.log('*******************************************************');
