const userReducer = function (user = {}, action) { //have to initialize with default empty val, it will be undefined otherwised.
  switch (action.type) {

    case 'CREATE_USER_ID':
      {
        return{
            username: user.username,
            id: action.id
      }
    }
    default:
      return user;
  }

}

export default userReducer;