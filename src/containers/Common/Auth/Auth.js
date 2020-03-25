import React, { Component } from "react";

import "./Auth.css";
import "css/assets/css/login.css";
import "css/assets/css/style.bundle.css";
import "css/assets/css/demo1/skins/header/base/light.css";
import "css/assets/css/demo1/skins/header/menu/light.css";
import "css/assets/css/demo1/skins/brand/dark.css";
import "css/assets/css/demo1/skins/aside/dark.css";
import logifiLogo from "css/assets/img/logos/logifi.png";
import LoginForm from "components/Common/Auth/loginForm";
class Auth extends Component {
  render() {
    return (
      <>
        <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading">
          <div className="kt-grid kt-grid--ver kt-grid--root">
            <div
              className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v6 kt-login--signin"
              id="kt_login"
            >
              <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
                <div className="kt-grid__item  kt-grid__item--order-tablet-and-mobile-2  kt-grid kt-grid--hor kt-login__aside">
                  <div className="kt-login__wrapper">
                    <div className="kt-login__container">
                      <div className="kt-login__body">
                        <div className="kt-login__logo">
                          <img alt="" src={logifiLogo} width="100%" />
                        </div>
                        <div className="kt-login__signin" id="kt-login__signin">
                          <div className="kt-login__head">
                            <h3 className="kt-login__title">
                              Sign In To Dashboard of Logifi
                            </h3>
                          </div>
                          {/*  Component 1 */}
                          <LoginForm />
                        </div>

                        {/* <div className="kt-login__forgot" id="kt-login__forgot">
                          <div className="kt-login__head">
                            <h3 className="kt-login__title">
                              Forgotten Password ?
                            </h3>
                            <div className="kt-login__desc">
                              Enter your email to reset your password:
                            </div>
                          </div>
                          <div className="kt-login__form" id="kt_login_forgot">
                            <form className="kt-form" action="">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Email"
                                  name="email"
                                  id="kt_email"
                                  autoComplete="off"
                                />
                              </div>
                              <div className="kt-login__actions">
                                <button
                                  id="kt_login_forgot_submit"
                                  className="btn btn-brand btn-pill btn-elevate"
                                >
                                  Request
                                </button>
                                <button
                                  id="kt_login_forgot_cancel"
                                  className="btn btn-outline-brand btn-pill"
                                >
                                  Cancel
                                </button>
                              </div>
                            </form>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kt-grid__item kt-grid__item--fluid kt-grid__item--center kt-grid kt-grid--ver kt-login__content bg-login">
                  <div className="kt-login__section">
                    <div className="kt-login__block">
                      <h3 className="kt-login__title">Join Our Community</h3>
                      <div className="kt-login__desc">
                        Lorem ipsum dolor sit amet, coectetuer adipiscing
                        <br />
                        elit sed diam nonummy et nibh euismod
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Auth;
