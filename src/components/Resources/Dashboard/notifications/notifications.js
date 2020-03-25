import React from "react";
import NotificaionData from "./notificationData";
const Notifications = props => {
  return (
    <>
      <div className="col-xl-7 col-lg-7 col-sm-6">
        <div className="kt-portlet kt-portlet--height-fluid">
          <div className="kt-portlet__head">
            <div className="kt-portlet__head-label">
              <h3 className="kt-portlet__head-title">Notifications</h3>
            </div>
          </div>
          <div className="kt-portlet__body">
            <div className="tab-content">
              <div
                className="tab-pane active"
                id="kt_widget6_tab1_content"
                aria-expanded="true"
              >
                <div className="kt-notification">
                  <NotificaionData />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Notifications;
