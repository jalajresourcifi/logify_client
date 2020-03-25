import React from "react";
import { Link } from "react-router-dom";
// import { Textbox } from "react-inputs-validation";
// import "react-inputs-validation/lib/react-inputs-validation.min.css";

const ChangePasswordFrom = props => {
  return (
    <>
      <form className="kt-form kt-form--label-right">
        <div className="kt-portlet__body">
          <div className="kt-section kt-section--first">
            <div className="kt-section__body">
              <div className="row">
                <label className="col-xl-3"></label>
                <div className="col-lg-9 col-xl-6">
                  <h3 className="kt-section__title kt-section__title-sm">
                    Change Or Recover Your Password:
                  </h3>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Current Password
                </label>
                <div className="col-lg-9 col-xl-6">
                  {/* <input
                    type="password"
                    className="form-control"
                    value={props.currentPassword}
                    placeholder="Current password"
                    name="currentpassword"
                    onChange={props.handleChange}
                  /> */}
                  {/* <Textbox
                    value={props.currentPassword}
                    attributesInput={{
                      // Optional.
                      id: "currentpassword",
                      name: "currentpassword",
                      maxLength: 15,
                      type: "password",
                      placeholder: "Current Password"
                    }}
                    validationOption={{
                      check: true,
                      required: true,
                      min: 6
                    }}
                    onChange={(name, e) => {}}
                    onBlur={() => {}}
                  /> */}
                  <Link
                    to=""
                    className="kt-link kt-font-sm kt-font-bold kt-margin-t-5"
                  >
                    Forgot password ?
                  </Link>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  New Password
                </label>
                <div className="col-lg-9 col-xl-6">
                  {/* <input
                    type="password"
                    className="form-control"
                    value={props.newPassword}
                    placeholder="New password"
                    name="newpassword"
                    onChange={props.handleChange}
                  /> */}
                  {/* <Textbox
                    value={props.newPassword}
                    attributesInput={{
                      // Optional.
                      id: "newpassword",
                      name: "newpassword",
                      maxLength: 15,
                      type: "password",
                      placeholder: "New Password"
                    }}
                    validationOption={{
                      check: true,
                      required: true,
                      min: 6
                    }}
                    onChange={(name, e) => {}}
                    onBlur={() => {}}
                  /> */}
                </div>
              </div>
              <div className="form-group form-group-last row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Verify Password
                </label>
                <div className="col-lg-9 col-xl-6">
                  {/* <input
                    type="password"
                    className="form-control"
                    value={props.verifyPassword}
                    placeholder="Verify password"
                    name="verifypassword"
                    onChange={props.handleChange}
                  /> */}
                  {/* <Textbox
                    value={props.verifyPassword}
                    attributesInput={{
                      // Optional.
                      id: "verifypassword",
                      name: "verifypassword",
                      maxLength: 15,
                      type: "password",
                      placeholder: "Verify Password"
                    }}
                    validationOption={{
                      check: true,
                      required: true,
                      min: 6
                    }}
                    onChange={(name, e) => {}}
                    onBlur={() => {}}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kt-portlet__foot">
          <div className="kt-form__actions">
            <div className="row">
              <div className="col-lg-3 col-xl-3"></div>
              <div className="col-lg-9 col-xl-9">
                <button
                  type="reset"
                  className="btn btn-brand btn-bold"
                  disabled={props.btnDisabled}
                >
                  Change Password
                </button>
                &nbsp;
                <button type="reset" className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ChangePasswordFrom;
