import React from 'react';

class UserInfo extends React.Component {

  handleNewId() {
    this
      .props
      .actions
      .createNewUserId()
  }
  handleNewIdIfOdd() {
    this
      .props
      .actions
      .createNewUserIdIfOdd()
  }
  handleNewIdAsync() {
    this
      .props
      .actions
      .createNewUserIdAsync()
  }

  render() {
    return (
      <div>
        <div>username : {this.props.user.username}</div>
        <div>id : {this.props.user.id}</div>
        <button onClick={this
          .handleNewId
          .bind(this)}>
          random ID
        </button>
        <button onClick={this
          .handleNewIdIfOdd
          .bind(this)}>
          Update only if odd
        </button>
        <button onClick={this
          .handleNewIdAsync
          .bind(this)}>
          update async
        </button>
      </div>
    )
  }

}

export default UserInfo;