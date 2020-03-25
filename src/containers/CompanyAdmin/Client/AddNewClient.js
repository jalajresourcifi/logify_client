import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "hoc/Layout/CompanyAdmin/Layout";
class AddNewClient extends Component {
  render() {
    return (
      <Layout name="addnewclient">
        <div
          className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
          id="kt_content"
        >
          {/* <!-- begin:: Subheader --> */}
          <div className="kt-subheader   kt-grid__item" id="kt_subheader">
            <div className="kt-container  kt-container--fluid ">
              <div className="kt-subheader__main">
                <button
                  className="kt-subheader__mobile-toggle kt-subheader__mobile-toggle--left"
                  id="kt_subheader_mobile_toggle"
                >
                  <span></span>
                </button>
                <h3 className="kt-subheader__title">Project Manager</h3>
                <span className="kt-subheader__separator kt-hidden"></span>
                <div className="kt-subheader__breadcrumbs">
                  <Link to="" className="kt-subheader__breadcrumbs-home">
                    <i className="flaticon2-shelter"></i>
                  </Link>
                  <span className="kt-subheader__breadcrumbs-separator"></span>
                  <Link to="" className="kt-subheader__breadcrumbs-link">
                    Add New Client{" "}
                  </Link>

                  {/* <!-- <span className="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> --> */}
                </div>
              </div>
            </div>
          </div>

          {/* <!-- end:: Subheader -->

<!-- begin:: Content --> */}
          <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
            <div className="kt-portlet">
              <div className="kt-portlet__body kt-portlet__body--fit">
                <div
                  className="kt-grid  kt-wizard-v1 kt-wizard-v1--white"
                  id="kt_apps_projects_add"
                  data-ktwizard-state="first"
                >
                  <div className="kt-grid__item kt-grid__item--fluid kt-wizard-v1__wrapper">
                    {/* <!--begin: Form Wizard Form--> */}
                    <form
                      className="kt-form"
                      id="kt_apps_projects_add_form"
                      novalidate="novalidate"
                    >
                      {/* <!--begin: Form Wizard Step 1--> */}
                      <div
                        className="kt-wizard-v1__content"
                        data-ktwizard-type="step-content"
                        data-ktwizard-state="current"
                      >
                        <div className="kt-heading kt-heading--md">
                          Client Details:
                        </div>
                        <div className="kt-section kt-section--first">
                          <div className="kt-wizard-v1__form">
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="kt-section__body">
                                  <div className="form-group row">
                                    <label className="col-xl-3 col-lg-3 col-form-label">
                                      Client Name
                                    </label>
                                    <div className="col-lg-9 col-xl-9">
                                      <input
                                        className="form-control"
                                        type="text"
                                        value="Loop CRM"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-xl-3 col-lg-3 col-form-label">
                                      Email Address
                                    </label>
                                    <div className="col-lg-9 col-xl-9">
                                      <div className="input-group">
                                        <div className="input-group-prepend">
                                          <span className="input-group-text">
                                            <i className="la la-at"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value="anna.krox@loop.com"
                                          placeholder="Email"
                                          aria-describedby="basic-addon1"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-xl-3 col-lg-3 col-form-label">
                                      UserName
                                    </label>
                                    <div className="col-lg-9 col-xl-9">
                                      <input
                                        className="form-control"
                                        type="text"
                                        value="Loop Inc."
                                      />
                                      <span className="form-text text-muted">
                                        If you want your invoices addressed to a
                                        company. Leave blank to use your full
                                        name.
                                      </span>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-xl-3 col-lg-3 col-form-label">
                                      Company
                                    </label>
                                    <div className="col-lg-9 col-xl-9">
                                      <input
                                        className="form-control"
                                        type="text"
                                        value="Krox"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label className="col-xl-3 col-lg-3 col-form-label">
                                      Profession
                                    </label>
                                    <div className="col-lg-9 col-xl-9">
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
                                    <div className="col-lg-9 col-xl-9">
                                      <input
                                        className="form-control"
                                        type="text"
                                        value="Designation"
                                      />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-xl-3 col-lg-3 col-form-label">
                                      Contact Phone
                                    </label>
                                    <div className="col-lg-9 col-xl-9">
                                      <div className="input-group">
                                        <div className="input-group-prepend">
                                          <span className="input-group-text">
                                            <i className="la la-phone"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value="+45678967456"
                                          placeholder="Phone"
                                          aria-describedby="basic-addon1"
                                        />
                                      </div>
                                      <span className="form-text text-muted">
                                        We'll never share your email with anyone
                                        else.
                                      </span>
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-xl-3 col-lg-3 col-form-label">
                                      Description
                                    </label>
                                    <div className="col-lg-9 col-xl-9">
                                      <div className="input-group">
                                        {/* <!-- <input type="text" className="form-control" placeholder="Comments Here" value="" /> --> */}
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
                          </div>
                        </div>
                      </div>

                      {/* <!--begin: Form Actions --> */}
                      <div className="kt-form__actions">
                        <div
                          className="btn btn-secondary btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u"
                          data-ktwizard-type="action-prev"
                        >
                          Previous
                        </div>
                        <div
                          className="btn btn-success btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u"
                          data-ktwizard-type="action-submit"
                        >
                          Submit
                        </div>
                        <div
                          className="btn btn-brand btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u"
                          data-ktwizard-type="action-next"
                        >
                          Create New Client
                        </div>
                      </div>

                      {/* <!--end: Form Actions --> */}
                    </form>

                    {/* <!--end: Form Wizard Form--> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- end:: Content --> */}
        </div>
      </Layout>
    );
  }
}

export default AddNewClient;
