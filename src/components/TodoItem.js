import React from 'react';
import action from '../actions/actions'

class TodoItem extends React.Component {

  handleComplete() {

    this
      .props
      .dispatch(action.completeTodo(this.props.todo.id))
  }
  handleDelete() {
    this
      .props
      .dispatch(action.deleteTodo(this.props.todo.id))

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
