import React from 'react';
import '../../assets/scss/styles.scss';
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {connect} from 'react-redux'

class Layout extends React.Component {

  render() {
    return (
  <div>
    <header>
      <h1 id='title'>Todo List</h1>
    </header>
    <TodoInput dispatch={this.props.dispatch} />
    <TodoList todos ={this.props.todos} />
  </div>
    )
  }

}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Layout);