"use strict";

function makeCounterLogger(start) {
  return function countUpOrDown(stop) {
    var i;
    if (start <= stop) {
      for (i = start; i <= stop; ++i) {
        console.log(i);
      }
    } else {
      for (i = start; i > stop; --i) {
        console.log(i);
      }
    }
  };
}

/* eslint-disable no-magic-numbers */
var countLog = makeCounterLogger(5);
countLog(8);
console.log("**********************************************;");
countLog(2);
console.log("**********************************************;");
countLog(5);
