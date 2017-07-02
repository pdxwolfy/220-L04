"use strict";

function greet(message, name) {
  var capitalize = function(string) {
    return string[0].toUpperCase() + string.slice(1);
  };

  console.log(capitalize(message) + ", " + name + "!");
}

greet("howdy", "Joe");
greet("good morning", "Sue");
