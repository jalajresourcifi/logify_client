import React, { Component } from "react";
import { Link } from "react-router-dom";
import "css/assets/css/style.bundle.css";
import "css/assets/css/demo1/skins/header/base/light.css";
import "css/assets/css/demo1/skins/header/menu/light.css";
import "css/assets/css/demo1/skins/brand/dark.css";
import "css/assets/css/demo1/skins/aside/dark.css";
import "css/assets/css/wizard-1.css";
import "css/assets/css/custom.css";
import "./dashboard.css";
import Layout from "hoc/Layout/Resource/Layout";
import DashboardProfile from "components/Resources/Dashboard/Profile";
import WorkLogs from "components/Resources/Dashboard/workLogs/workLogs";
import ProjectList from "components/Resources/Dashboard/projectLists/projectLists";
import Ratings from "components/Resources/Dashboard/ratings";
import Notifications from "components/Resources/Dashboard/notifications/notifications";
import Calendar from "components/Resources/Dashboard/calendar";
class Dashboard extends Component {
  render() {
    return (
      <Layout name="dashboard">
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
                <h3 className="kt-subheader__title">Resource </h3>
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

          <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="kt-portlet kt-portlet--height-fluid">
                  <DashboardProfile />
                </div>
              </div>
            </div>

            <div className="row">
              <Calendar />
              <ProjectList />
              <WorkLogs />
              <Notifications />
              <Ratings />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Dashboard;
