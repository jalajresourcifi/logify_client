import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { RoleAuth } from "hoc/roleFuncs";

const mapStateToProps = state => {
  if (state.auth.user) return { userRole: state.auth.user.role };
  return {};
};
export class AuthRoutes extends Component {
  render() {
    return (
      <>
        {this.props.tokenMissing ? <Redirect to="/login" /> : null}

        {!this.props.checked ? <div className="">Loading</div> : null}

        {this.props.isAuthenticated ? (
          RoleAuth(this.props.userRole, this.props.authRole) ? (
            this.props.children
          ) : (
            <div>Not Permitted</div>
          )
        ) : this.props.checked ? (
          <Redirect to="/login" />
        ) : null}
      </>
    );
  }
}

export default connect(mapStateToProps)(AuthRoutes);

//This Component has all the common security checks when a user hits a Authenticated Routes

//1) If the token is missing Redirect to /login page
//2) If the user is un-checked serve a loading screen
//3) If the user is un-authenticated & checked redirect to /login

//Extra Info

//1) If you want to have a route common for all users, render this Component directly in layout(routes.jsx)
