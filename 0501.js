"use strict";

function makeList() {
  return {
    todos: [],

    add: function(todoItem) {
      this.todos.push(todoItem);
      console.log(todoItem + " added!");
    },

    list: function() {
      if (this.todos.length === 0) {
        console.log("There are no items in the list.");
      } else {
        this.todos.forEach(function(todo) {
          console.log(todo);
        });
      }
    },

    remove: function(todoItem) {
      var index = this.todos.indexOf(todoItem);
      console.log(this.todos[index] + " removed!");
      this.todos.splice(index, 1);
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
