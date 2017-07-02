"use strict";

function later(theFunction, theArgument) {
  return function () {
    theFunction(theArgument);
  };
}

/* eslint-disable no-magic-numbers */

var warning = later(console.log, "The system is shutting down!");
warning();

warning = later(
  function (value) {
    console.log(value.toUpperCase());
  },
  "What's up, Doc?"
);

warning();
