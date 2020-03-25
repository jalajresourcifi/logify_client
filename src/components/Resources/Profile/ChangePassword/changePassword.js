import React from "react";
import { Link } from "react-router-dom";
import "css/assets/css/style.bundle.css";
import "css/assets/css/demo1/skins/header/base/light.css";
import "css/assets/css/demo1/skins/header/menu/light.css";
import "css/assets/css/demo1/skins/brand/dark.css";
import "css/assets/css/demo1/skins/aside/dark.css";
import "css/assets/css/wizard-1.css";
import "css/assets/css/custom.css";
import ChangePasswordForm from "./changePasswordForm";
const ChangePassword = props => {
  return (
    <>
      <div className="kt-grid__item kt-grid__item--fluid kt-app__content">
        <div className="row">
          <div className="col-xl-12">
            <div className="kt-portlet kt-portlet--height-fluid">
              <div className="kt-portlet__head">
                <div className="kt-portlet__head-label">
                  <h3 className="kt-portlet__head-title">
                    Change Password
                    <small>change or reset your account password</small>
                  </h3>
                </div>
                <div className="kt-portlet__head-toolbar kt-hidden">
                  <div className="kt-portlet__head-toolbar">
                    <div className="dropdown dropdown-inline">
                      <button
                        type="button"
                        className="btn btn-clean btn-sm btn-icon btn-icon-md"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="la la-sellsy"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <ul className="kt-nav">
                          <li className="kt-nav__section kt-nav__section--first">
                            <span className="kt-nav__section-text">
                              Quick Actions
                            </span>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-graph-1"></i>
                              <span className="kt-nav__link-text">
                                Statistics
                              </span>
                            </Link>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-calendar-4"></i>
                              <span className="kt-nav__link-text">Events</span>
                            </Link>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-layers-1"></i>
                              <span className="kt-nav__link-text">Reports</span>
                            </Link>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-bell-1o"></i>
                              <span className="kt-nav__link-text">
                                Notifications
                              </span>
                            </Link>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-file-1"></i>
                              <span className="kt-nav__link-text">Files</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ChangePasswordForm
                currentPassword={props.currentPassword}
                newPassword={props.newPassword}
                verifyPassword={props.verifyPassword}
                handleChange={props.handleChange}
                btnDisabled={props.btnDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangePassword;
