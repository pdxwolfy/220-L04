"use strict";

function makeList() {
  var todos = [];

  return {
    add: function(todoItem) {
      todos.push(todoItem);
      console.log(todoItem + " added!");
    },

    list: function() {
      if (todos.length === 0) {
        console.log("There are no items in the list.");
      } else {
        todos.forEach(function(todo) {
          console.log(todo);
        });
      }
    },

    remove: function(todoItem) {
      var index = todos.indexOf(todoItem);
      console.log(todos[index] + " removed!");
      todos.splice(index, 1);
    },
  };
}

/* eslint-disable no-magic-numbers */

var list = makeList();
list.add("peas");         // peas added!
list.list();              // peas
list.add("corn");         // corn added!
list.list();              // peas
                          // corn
list.remove("peas");      // peas removed!
list.list();              // corn
console.log(list.todos);
