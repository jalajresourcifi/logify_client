import React, { Component } from "react";
import { Link } from "react-router-dom";
import "css/assets/css/style.bundle.css";
import "css/assets/css/demo1/skins/header/base/light.css";
import "css/assets/css/demo1/skins/header/menu/light.css";
import "css/assets/css/demo1/skins/brand/dark.css";
import "css/assets/css/demo1/skins/aside/dark.css";
import "css/assets/css/wizard-1.css";
import "css/assets/css/custom.css";
import "./worklogs.css";
import Layout from "hoc/Layout/CompanyAdmin/Layout";
import TableData from "components/CompanyAdmin/WorkLogs/tableData";
import Pagination from "components/CompanyAdmin/WorkLogs/pagination";
class WorkLogs extends Component {
  render() {
    return (
      <>
        <Layout name="worklogs">
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
                      Work Logs{" "}
                    </Link>

                    {/* <!-- <span className="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> --> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
              <div className="row">
                <div className="col-xl-12">
                  <div className="kt-portlet ">
                    <div className="kt-portlet__body kt-portlet__body--fit">
                      <div
                        className="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--error kt-datatable--loaded"
                        id="json_data"
                      >
                        <table className="kt-datatable__table worklogs kt-table-worklog">
                          <thead className="kt-datatable__head">
                            <tr className="kt-datatable__row">
                              <th
                                data-field="RecordID"
                                className="kt-datatable__cell--center kt-datatable__cell"
                              >
                                <span className="width100px">Date</span>
                              </th>
                              <th
                                data-field="OrderID"
                                className="kt-datatable__cell"
                              >
                                <span className="width100px">Task</span>
                              </th>
                              <th
                                data-field="Country"
                                className="kt-datatable__cell"
                              >
                                <span className="width100px">Status</span>
                              </th>
                              <th
                                data-field="ShipAddress"
                                className="kt-datatable__cell"
                              >
                                <span className="width100px">Activities</span>
                              </th>
                              <th
                                data-field="ShipDate"
                                className="kt-datatable__cell"
                              >
                                <span className="width100px">Duration</span>
                              </th>
                              <th
                                data-field="Status"
                                className="kt-datatable__cell"
                              >
                                <span className="width100px">Notes</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="kt-datatable__body">
                            <span className="kt-datatable--error"></span>
                            <TableData />
                            <TableData />
                            <TableData />
                            <TableData />
                            <TableData />
                            <TableData />
                            <TableData />
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Pagination />
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default WorkLogs;
