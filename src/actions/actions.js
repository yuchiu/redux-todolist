let actions = {

  addTodo: function (text) {
    return {type: 'ADD_TODO', text: text}
  },
  completeTodo: function (id) {
    return {type: 'COMPLETE_TODO', id: id}
  },

  deleteTodo: function (id) {
    return {type: 'DELETE_TODO', id: id}
  },

  createNewUserId: function () {
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 1000000)
    }
  },
  createNewUserIdIfOdd: function () {
    return (dispatch, getState) => {
      const {user} = getState()
      if (user.id % 2 === 0) {

        return
      }
      dispatch(actions.createNewUserId())
    }
  },
  createNewUserIdAsync: function () {
    return (dispatch) => {

      /* this will handle async function, like ajax calls, server calls */
      setTimeout(()=>{
        dispatch(actions.createNewUserId())

      }, 2000)
    }
  }

}

export default actions;

//store.dispath(addTodo('some text'))