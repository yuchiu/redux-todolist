import React from 'react';


class UserInfo extends React.Component {

    handleNewId(){

        this.props.createNewUserId()
        }


  render() {
    return (
  <div>
    <div>username : {this.props.user.username}</div>
    <div>id : {this.props.user.id}</div>
    <button onClick = {this.handleNewId.bind(this)}> handle with random ID </button>
  </div>
    )
  }

}



export default UserInfo;