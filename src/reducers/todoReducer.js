function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

const todoReducer = function (todos = [], action) { //have to initialize with default empty val, it will be undefined otherwised.
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          text: action.text, //add new todo info
          completed: false,
          id: getId(todos)
        },
        ...todos //append todos
      ]
    case 'COMPLETE_TODO':
      return
      todos.map((todo) => {
        return todo.id === action.id
          ? Object.assign({}, todo, {
            completed: !todo.completed
          })
          : todo
      })

    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo.id !== action.id
      })
    default:
      return todos;
  }

}

export default todoReducer;