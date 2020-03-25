import React, { Component } from "react";
import { connect } from "react-redux";
import { checkRole } from "hoc/roleFuncs";
const mapStateToProps = state => {
  return { auth: state.auth };
};

export class UnAuthRoutes extends Component {
  render() {
    return (
      <>
        {!this.props.checked ? <div className="">Loading</div> : null}
        {this.props.isAuthenticated
          ? checkRole(this.props.auth.user.role) //$$$$$$$$$$$$$$$$$
          : this.props.checked
          ? this.props.children
          : null}
      </>
    );
  }
}

export default connect(mapStateToProps)(UnAuthRoutes);

//This Component has all the security checks when a user hits an unAuthenticated Routes

//1) Checks if the user is Authenticated
