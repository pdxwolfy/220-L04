"use strict";

function makeList() {
  var todos = [];

  var log = function () {
    if (todos.length === 0) {
      console.log("There are no items in the list.");
    } else {
      todos.forEach(function (todo) {
        console.log(todo);
      });
    }
  };

  var add = function (todo) {
    todos.push(todo);
    console.log(todo + " added!");
  };

  var remove = function (index) {
    console.log(todos[index] + " removed!");
    todos.splice(index, 1);
  };

  return function (todoItem) {
    var index;

    if (typeof todoItem === 'undefined') {
      log();
    } else {
      index = todos.indexOf(todoItem);
      if (index === -1) {
        add(todoItem);
      } else {
        remove(index);
      }
    }
  };
}

/* eslint-disable no-magic-numbers */

var list = makeList();
list();                 // There are no items in the list.
list('make breakfast'); // make breakfast added!
list('read book');      // read book added!
list();                 // make breakfast
                        // read book
list('make breakfast'); // make breakfast removed!
list();                 // read book
list('read book');      // read book removed!
list();                 // There are no items in the list.
