import React from "react";

const ProfileForm = () => {
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
                    Customer Info:
                  </h3>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Avatar
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div
                    className="kt-avatar kt-avatar--outline kt-avatar--circle"
                    id="kt_apps_user_add_avatar"
                  >
                    <div className="kt-avatar__holder kt-avatar-100_1"></div>
                    <label
                      className="kt-avatar__upload"
                      data-toggle="kt-tooltip"
                      title=""
                      data-original-title="Change avatar"
                    >
                      <i className="la la-pen"></i>
                      <input
                        type="file"
                        name="profile_avatar"
                        accept=".png, .jpg, .jpeg"
                      />
                    </label>
                    <span
                      className="kt-avatar__cancel"
                      data-toggle="kt-tooltip"
                      title=""
                      data-original-title="Cancel avatar"
                    >
                      <i className="fa fa-times"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  User Name
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input className="form-control" type="text" value="Nick" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Email Address
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="la la-at"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      value="nick.bold@loop.com"
                      placeholder="Email"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Company Name
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    type="text"
                    value="RNF Technologies"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Profession
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    type="text"
                    value="Profession"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Designation
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    type="text"
                    value="Designation"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Resource Type
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    type="text"
                    value="Resource Type"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Address
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input className="form-control" type="text" value="Address" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Skills
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    type="text"
                    value=""
                    placeholder="Technical Skills"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Website
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    type="text"
                    value=""
                    placeholder="Website"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Status
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    type="text"
                    value=""
                    placeholder="Status"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Joining Date
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    type="date"
                    value=""
                    placeholder="Joining Date"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Shift Start
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    type="time"
                    value=""
                    placeholder="Shift Start"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Shift End
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    type="time"
                    value=""
                    placeholder="Shift End"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Contact Phone
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="la la-phone"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      value="+35278953712"
                      placeholder="Phone"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <span className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </span>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Leaves Applied
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    type="number"
                    value=""
                    placeholder="Leaves Applied"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Leaves Approved
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    type="number"
                    value=""
                    placeholder="Leaves Approved"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Availability
                </label>
                <div className="col-lg-9 col-xl-6">
                  <select className="form-control" aria-invalid="false">
                    <option>Select...</option>
                    <option value="id">Availabile</option>
                    <option value="msa">Not Availabile</option>
                  </select>
                </div>
              </div>
              <div className="form-group form-group-last row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Description
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="input-group">
                    <textarea
                      className="form-control"
                      placeholder="Comments Here"
                    ></textarea>
                  </div>
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
                <button type="reset" className="btn btn-success btn-logifi">
                  Submit
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

export default ProfileForm;
