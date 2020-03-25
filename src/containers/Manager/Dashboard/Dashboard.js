import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
//Ask If these imports really doing anything or not
import "css/assets/css/style.bundle.css";
import "css/assets/css/demo1/skins/header/base/light.css";
import "css/assets/css/demo1/skins/header/menu/light.css";
import "css/assets/css/demo1/skins/brand/dark.css";
import "css/assets/css/demo1/skins/aside/dark.css";
import "css/assets/css/wizard-1.css";
import "css/assets/css/custom.css";
//end
import Layout from "hoc/Layout/Manager/Layout";

import "./Dashboard.css";
import ProjectList from "components/Manager/Dashboard/ProjectList";
import AllResources from "components/Manager/Dashboard/AllResources";
import ClientList from "components/Manager/Dashboard/ClientList";
import Notifications from "components/Manager/Dashboard/Notifications";
import Calendar from "components/Manager/Dashboard/Calendar";
import Profile from "components/Manager/Dashboard/Profile";

class Dashboard extends Component {
  render() {
    return (
      <Layout name="dashboard">
        <div
          className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
          id="kt_content"
        >
          {/* <!-- begin:: Content Head --> */}
          <div className="kt-subheader   kt-grid__item" id="kt_subheader">
            <div className="kt-container  kt-container--fluid ">
              <div className="kt-subheader__main">
                <button
                  className="kt-subheader__mobile-toggle kt-subheader__mobile-toggle--left"
                  id="kt_subheader_mobile_toggle"
                >
                  <span></span>
                </button>
                <h3 className="kt-subheader__title">Project Manager </h3>
                <span className="kt-subheader__separator kt-hidden"></span>
                <div className="kt-subheader__breadcrumbs">
                  <Link to="" className="kt-subheader__breadcrumbs-home">
                    <i className="flaticon2-shelter"></i>
                  </Link>
                  <span className="kt-subheader__breadcrumbs-separator"></span>
                  <Link to="" className="kt-subheader__breadcrumbs-link">
                    Dashboard{" "}
                  </Link>

                  {/* <!-- <span className="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> --> */}
                </div>
              </div>
            </div>
          </div>

          {/* <!-- end:: Content Head -->

<!-- begin:: Content --> */}
          <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
            {/* <!--Begin::Dashboard 1-->

  <!--Begin::Row-->
  <!-- <div className="row">
    <div className="col-xl-12 order-lg-2 order-xl-1">
      ij
    </div>
  </div> --> */}

            <div className="row">
              <Profile />
            </div>

            <div className="row">
              <ProjectList />
              <AllResources />
              <ClientList />
              <Notifications />
              <Calendar />

              {/* <!--End::Dashboard 1--> */}
            </div>
          </div>

          {/* <!-- end:: Content --> */}
        </div>
      </Layout>
    );
  }
}

export default withRouter(Dashboard);
