import React from 'react';

class TodoItem extends React.Component {

  handleComplete() {

    this
      .props
      .actions.completeTodo(this.props.todo.id)
  }
  handleDelete() {
    this
      .props
      .actions.deleteTodo(this.props.todo.id)

  }

  render() {
    return (
      <li >{this.props.todo.text}

        <button onClick={this
          .handleComplete
          .bind(this)}>complete</button>
        <button onClick={this
          .handleDelete
          .bind(this)}>delete</button>
      </li>

    )
  }
}

export default TodoItem;
