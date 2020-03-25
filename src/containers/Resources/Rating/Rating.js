import React, { Component } from "react";
import { Link } from "react-router-dom";
import img1 from "css/assets/img/100_1.jpg";
import Layout from "hoc/Layout/Resource/Layout";
class Rating extends Component {
  render() {
    return (
      <Layout>
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
                <h3 className="kt-subheader__title">Project Manager</h3>
                <span className="kt-subheader__separator kt-hidden"></span>
                <div className="kt-subheader__breadcrumbs">
                  <Link to="" className="kt-subheader__breadcrumbs-home">
                    <i className="flaticon2-shelter"></i>
                  </Link>
                  <span className="kt-subheader__breadcrumbs-separator"></span>
                  <Link to="" className="kt-subheader__breadcrumbs-link">
                    Rating for Resource{" "}
                  </Link>

                  {/* <!-- <span className="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> --> */}
                </div>
              </div>
            </div>
          </div>

          <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
            {/* <!-- <div className="row">
        <div className="col-xl-12 order-lg-2 order-xl-1">
            ij
        </div>
    </div> --> */}

            <div className="row">
              <div className="col-xl-12">
                <div className="kt-portlet kt-portlet--height-fluid">
                  <div className="kt-portlet__body">
                    <div className="kt-widget kt-widget--user-profile-3">
                      <div className="kt-widget__top">
                        <div className="kt-widget__media kt-hidden-">
                          <img alt="" src={img1} />
                        </div>
                        <div className="kt-widget__pic kt-widget__pic--danger kt-font-danger kt-font-boldest kt-font-light kt-hidden">
                          JM
                        </div>
                        <div className="kt-widget__content">
                          <div className="kt-widget__head">
                            <Link to="" className="kt-widget__username">
                              Project Manager Name
                              <i className="flaticon2-correct"></i>
                            </Link>
                          </div>
                          <div className="kt-widget__subhead">
                            <Link to="">
                              <i className="flaticon2-new-email"></i>
                              jason@siastudio.com
                            </Link>
                            <Link to="">
                              <i className="flaticon2-calendar-3"></i>Project
                              Manager{" "}
                            </Link>
                            <Link to="">
                              <i className="flaticon2-placeholder"></i>3yrs Exp
                            </Link>
                          </div>
                          <div className="kt-widget__info">
                            <div className="kt-widget__desc">
                              I distinguish three main text objektive could be
                              merely to inform people.
                              <br /> A second could be persuade people.You want
                              people to bay objective
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12 order-lg-1 order-xl-1">
                <div className="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
                  <div className="kt-portlet">
                    <div className="kt-portlet__body kt-portlet__body--fit">
                      <div
                        className="kt-grid  kt-wizard-v1 kt-wizard-v1--white"
                        id="kt_apps_projects_add"
                        data-ktwizard-state="first"
                      >
                        <div className="kt-grid__item kt-grid__item--fluid kt-wizard-v1__wrapper">
                          <form
                            className="kt-form"
                            id="kt_apps_projects_add_form"
                            novalidate="novalidate"
                          >
                            <div
                              className="kt-wizard-v1__content"
                              data-ktwizard-type="step-content"
                              data-ktwizard-state="current"
                            >
                              <div className="kt-heading kt-heading--md">
                                Rate for Resource
                              </div>
                              <div className="kt-section kt-section--first">
                                <div className="kt-wizard-v1__form">
                                  <div className="row">
                                    <div className="col-xl-12">
                                      <div className="kt-section__body">
                                        <div className="form-group row">
                                          <label className="col-xl-3 col-lg-3 col-form-label">
                                            Resource Name
                                          </label>
                                          <div className="col-lg-9 col-xl-9">
                                            <input
                                              className="form-control"
                                              type="text"
                                              value="Loop CRM"
                                              disabled="disabled"
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
                                              disabled="disabled"
                                            />
                                          </div>
                                        </div>

                                        <div className="form-group row">
                                          <label className="col-xl-3 col-lg-3 col-form-label">
                                            Rate (out of 5 Star)
                                          </label>
                                          <div className="col-lg-9 col-xl-9">
                                            <input
                                              className="form-control"
                                              type="text"
                                              value="Rate"
                                            />
                                          </div>
                                        </div>

                                        <div className="form-group row">
                                          <label className="col-xl-3 col-lg-3 col-form-label">
                                            Description
                                          </label>
                                          <div className="col-lg-9 col-xl-9">
                                            <div className="input-group">
                                              {/* <!-- <input type="text" className="form-control" placeholder="Comments Here" value=""> --> */}
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
                                Submit
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Rating;
