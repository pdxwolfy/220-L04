"use strict";

function greet(message, name) {
  var capitalize = function(string) {
    return string[0].toUpperCase() + string.slice(1);
  };

  console.log(capitalize(message) + ", " + name + "!");
}

function partial(func, arg1) {
  return function(arg2) {
    func(arg1, arg2);
  };
}

var sayHello = partial(greet, "hello");
var sayHi = partial(greet, "hi");

sayHello("Brandon");
sayHi("Sarah");
