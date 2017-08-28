function getId(state){
    return state.todos.reduce((maxId, todo)=>{
        return Math.max(todo.id, maxId)
    },-1)+1
}

const reducer =  function(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      /*at first,--- {}, state--- will put state into the object, however  add third object in the
        argument will rewrite the new object as the third arg
        */
     return  Object.assign({}, state, {
        todos: [
          {
            text: action.text, //add new todo info
            completed: false,
            id: getId(state)
          },
          ...state.todos // append the rest of todo arrays
        ]
      })
    default:
      return state;
  }

}

export default reducer;