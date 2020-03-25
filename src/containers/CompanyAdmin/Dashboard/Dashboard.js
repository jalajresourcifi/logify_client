import React, { Component } from "react";
import Layout from "hoc/Layout/CompanyAdmin/Layout";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import MembershipDetails from "components/CompanyAdmin/Dashboard/MembershipDetails";
import Notifications from "components/CompanyAdmin/Dashboard/Notifications";
import SalesReport from "components/CompanyAdmin/Dashboard/SalesReport";
import ProjectList from "components/CompanyAdmin/Dashboard/ProjectList";
import AllResources from "components/CompanyAdmin/Dashboard/AllResources";
import ClientList from "components/CompanyAdmin/Dashboard/ClientList";
import Profile from "components/CompanyAdmin/Dashboard/Profile";

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
                <h3 className="kt-subheader__title">Company Admin </h3>
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
            <div className="row">
              <Profile />
            </div>
            <MembershipDetails />
            <div className="row">
              <Notifications />
              <SalesReport />
              <ProjectList />
              <AllResources />
              <ClientList />
            </div>

            {/* <!--End::Dashboard 1--> */}
          </div>

          {/* <!-- end:: Content --> */}
        </div>
      </Layout>
    );
  }
}

export default Dashboard;
