import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import routes from "./Routers/routes";
import Error from "components/Common/Error/error";
import { connect } from "react-redux";
import { AUTHTOKEN } from "inc/config";
import { checkAuth } from "redux/actions/auth";
import { TOKEN_MISSING } from "redux/actions/actionTypes";
const mapStateToProps = state => {
  return { loginState: state.auth };
};
const mapDispatchToProps = dispatch => ({
  checkAuthentication: token => {
    dispatch(checkAuth(token));
  },
  tokenMissing: () => dispatch({ type: TOKEN_MISSING })
});
export class Router extends Component {
  state = {
    checked: false,
    isAuthenticated: false,
    tokenMissing: true
  };
  static getDerivedStateFromProps(props, state) {
    let checked = false;
    let isAuthenticated = false;
    let tokenMissing = true;
    checked = props.loginState.authDone;
    isAuthenticated = props.loginState.isLoggedIn;
    let authToken = localStorage.getItem(AUTHTOKEN);

    if (authToken === null || authToken === undefined) {
      tokenMissing = true;
    } else {
      tokenMissing = false;
    }

    return { checked, isAuthenticated, tokenMissing };
  }
  componentDidMount(prevProps, prevState) {
    let authToken = localStorage.getItem(AUTHTOKEN);
    this.props.checkAuthentication(authToken);
  }
  render() {
    return (
      <>
        <Switch>
          {routes.map(
            (
              { exact, path, component: Component, layout: Layout, user },
              index
            ) => (
              <Route
                key={index}
                path={path}
                exact={exact}
                render={props => (
                  <Layout {...this.state} authRole={user}>
                    <Component {...props} />
                  </Layout>
                )}
              />
            )
          )}
          <Redirect exact from="/" to="/login" />
          <Route component={Error} />

          {/* {<Redirect from="*" to="/" />} */}
        </Switch>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router));
