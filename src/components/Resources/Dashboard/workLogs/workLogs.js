import React from "react";
import WorkLogsData from "./workLogsData";
import { Link } from "react-router-dom";
const WorkLogs = props => {
  return (
    <>
      <div className="col-xl-7 col-lg-6 col-sm-6">
        <div className="kt-portlet kt-portlet--height-fluid">
          <div className="kt-portlet__head">
            <div className="kt-portlet__head-label">
              <h3 className="kt-portlet__head-title">Work Logs</h3>
            </div>
          </div>
          <div className="kt-portlet__body">
            <div className="table-responsive worklog-widget">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Task</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <WorkLogsData />
                </tbody>
              </table>
              <div className="kt-widget4__info">
                <Link
                  to="/resources/worklogs"
                  className="btn btn-sm btn-label-info wide-100per"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkLogs;
