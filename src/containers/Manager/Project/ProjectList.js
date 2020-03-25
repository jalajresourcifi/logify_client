import React, { Component } from "react";
import "css/assets/css/style.bundle.css";
import "css/assets/css/demo1/skins/header/base/light.css";
import "css/assets/css/demo1/skins/header/menu/light.css";
import "css/assets/css/demo1/skins/brand/dark.css";
import "css/assets/css/demo1/skins/aside/dark.css";
import "css/assets/css/wizard-1.css";
import "css/assets/css/custom.css";
import "./Project.css";
import { Link } from "react-router-dom";
import Layout from "hoc/Layout/Manager/Layout";
import ProjectListLooper from "components/Manager/Project/ProjectListLooper";

class ProjectList extends Component {
  render() {
    return (
      <>
        <Layout name="project">
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
                  <h3 className="kt-subheader__title">Projects </h3>
                  <span className="kt-subheader__separator kt-hidden"></span>
                  <div className="kt-subheader__breadcrumbs">
                    <Link to="" className="kt-subheader__breadcrumbs-home">
                      <i className="flaticon2-shelter"></i>
                    </Link>
                    <span className="kt-subheader__breadcrumbs-separator"></span>
                    <Link to="" className="kt-subheader__breadcrumbs-link">
                      Projects List{" "}
                    </Link>

                    {/* <!-- <span className="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> --> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
              <div className="row">
                <ProjectListLooper />
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default ProjectList;
