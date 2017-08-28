import React from 'react';
import actions from '../actions/actions'

class TodoInput extends React.Component {

  constructor() {
    super();
    this.state = {
      inputVal: ''
    }
  }
  handleChange(e) {
    this.setState({inputVal: e.target.value})
  }

  handleSubmit(e) {
    //take current this.state.inputVal delete letter update state
    e.preventDefault();
    this.setState({inputVal :''})
    this
      .props
      .dispatch(actions.addTodo(this.state.inputVal))
  }

  render() {
    return (
      <div id="container">
        <form onSubmit={this
          .handleSubmit
          .bind(this)}>
          <input
            onChange={this
            .handleChange
            .bind(this)}
            value={this.state.inputVal}
            placeholder="add to list.."></input>

          <input type='submit' value='Add'/>
        </form>
      </div>
    )
  }

}

export default TodoInput;