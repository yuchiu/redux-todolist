import React from 'react';
class TodoList extends React.Component {

  render() {
    return (

      <div>
        <ul>
          {this
            .props
            .todos
            .map((todo) => {

              return <li key={todo.id}>{todo.text}</li>
            })
}

        </ul>
      </div>
    )
  }

}

export default TodoList;
