import React from 'react';
import '../../assets/scss/styles.scss';
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../actions/actions'
class Layout extends React.Component {

  render() {
    return (
  <div>
    <header>
      <h1 id='title'>Todo List</h1>
    </header>
    <TodoInput addTodo={this.props.actions.addTodo} />
    <TodoList todos ={this.props.todos}  actions = {this.props.actions}/>
  </div>
    )
  }

}

function mapStateToProps(state){
  return state
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators (actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);