import React, { Component } from "react";
import AdminForm from "../../../Post/PostForm";
import { MyContext } from "../../../User/UserProvider";

class AdminPostCreate extends Component {
  render() {
    const { userSession, username } = this.context.state.currentuser;
    return <PostForm username={username} userSession={userSession} />;
  }
}

AdminPostCreate.contextType = MyContext;
export default AdminPostCreate;
