import React, { Component } from "react";
import { Link } from "react-router-dom";
import "css/assets/css/style.bundle.css";
import "css/assets/css/demo1/skins/header/base/light.css";
import "css/assets/css/demo1/skins/header/menu/light.css";
import "css/assets/css/demo1/skins/brand/dark.css";
import "css/assets/css/demo1/skins/aside/dark.css";
import "css/assets/css/wizard-1.css";
import "css/assets/css/custom.css";
import "./Profile.css";
import Layout from "hoc/Layout/CompanyAdmin/Layout";
import ProfileAside from "components/CompanyAdmin/Profile/ProfileOverview/ProfileAside";
import ChangePassword from "components/CompanyAdmin/Profile/ChangePassword/changePassword";
class ProfilePassword extends Component {
  state = {
    currentPassword: "",
    newPassword: "",
    verifyPassword: "",
    btnDisabled: true
  };
  render() {
    return (
      <>
        <Layout name="profile">
          <div
            className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
            id="kt_content"
          >
            <div className="kt-subheader   kt-grid__item" id="kt_subheader">
              <div className="kt-container  kt-container--fluid ">
                <div className="kt-subheader__main">
                  <button
                    className="kt-subheader__mobile-toggle kt-subheader__mobile-toggle--left"
                    id="kt_subheader_mobile_toggle"
                  >
                    <span></span>
                  </button>
                  <h3 className="kt-subheader__title">Company Admin</h3>
                  <span className="kt-subheader__separator kt-hidden"></span>
                  <div className="kt-subheader__breadcrumbs">
                    <Link to="" className="kt-subheader__breadcrumbs-home">
                      <i className="flaticon2-shelter"></i>
                    </Link>
                    <span className="kt-subheader__breadcrumbs-separator"></span>
                    <Link to="" className="kt-subheader__breadcrumbs-link">
                      Profile Overview{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
              <div className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
                <button
                  className="kt-app__aside-close"
                  id="kt_user_profile_aside_close"
                >
                  <i className="la la-close"></i>
                </button>

                <ProfileAside />
                <ChangePassword
                  currentPassword={this.state.currentPassword}
                  newPassword={this.state.newPassword}
                  verifyPassword={this.state.verifyPassword}
                  handleChange={this.state.handleChange}
                  btnDisabled={this.state.btnDisabled}
                />
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default ProfilePassword;
