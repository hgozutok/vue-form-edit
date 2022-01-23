
export  const counterModule = {
  state: {
    count: 0,
    todos: [
      { id: 1, text: "ddddd", done: true },
      { id: 2, text: ".dddsssd", done: false }
    ],
   

  },
  mutations: {
    increment(state) {

      state.count++;
    },
    decrement(state) {
        
        state.count--;
      }

      ,
      addTodo(state, todo) {
        state.todos.push(todo);
      }
      ,
      removeTodo(state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1);
      },
      updateTodo(state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1, todo);
      },
      
     



  },
  actions: {
    increment(context) {
      context.commit("increment");
    },

    


  },
  modules: {

  }

};
