import React, { Component } from "react";
import { Link } from "react-router-dom";
import "css/assets/css/style.bundle.css";
import "css/assets/css/demo1/skins/header/base/light.css";
import "css/assets/css/demo1/skins/header/menu/light.css";
import "css/assets/css/demo1/skins/brand/dark.css";
import "css/assets/css/demo1/skins/aside/dark.css";
import "css/assets/css/wizard-1.css";
import "css/assets/css/custom.css";
import "./CreatePassword.css";
import logifiLogo from "css/assets/img/logos/logifi.png";
class CreatePassword extends Component {
  render() {
    return (
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
                        <Link to="">
                          <img alt="" src={logifiLogo} width="100%" />
                        </Link>
                      </div>
                      <div className="kt-login__signin" id="kt-login__signin">
                        <div className="kt-login__head">
                          <h3 className="kt-login__title">
                            Create New Password
                          </h3>
                        </div>
                        <div className="kt-login__form">
                          <form className="kt-form" action="">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Create New Password"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                className="form-control form-control-last"
                                type="password"
                                placeholder="Re-enter New Password"
                                name=""
                              />
                            </div>
                            <div className="kt-login__extra"></div>
                            <div className="kt-login__actions">
                              <button
                                id="kt_login_signin_submit"
                                className="btn btn-brand btn-pill btn-elevate"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kt-grid__item kt-grid__item--fluid kt-grid__item--center kt-grid kt-grid--ver kt-login__content kt-grid-item-bg">
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
    );
  }
}

export default CreatePassword;
