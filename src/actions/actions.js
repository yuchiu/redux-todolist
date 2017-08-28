let actions = {

  addTodo: function(text) {
    return {type: 'ADD_TODO', text: text}
  }
}

export default actions;

//store.dispath(addTodo('some text'))