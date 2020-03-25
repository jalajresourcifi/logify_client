import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "hoc/Layout/Manager/Layout";
import NewProjectForm from "components/CompanyAdmin/Project/AddNewProject";
class AddNewProject extends Component {
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
                    Add New Project{" "}
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
                    <NewProjectForm />
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

export default AddNewProject;
