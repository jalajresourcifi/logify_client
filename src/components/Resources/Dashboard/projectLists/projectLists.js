import React from "react";
import ProjectData from "./projectData";
const ProjectList = props => {
  return (
    <>
      <div className="col-xl-5 col-lg-6 col-sm-6">
        <div className="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div className="kt-portlet__head">
            <div className="kt-portlet__head-label">
              <h3 className="kt-portlet__head-title">Project List</h3>
            </div>
          </div>
          <div className="kt-portlet__body">
            <div className="tab-content">
              <div className="tab-pane active" id="kt_widget4_tab1_content">
                <div className="kt-widget4">
                  <ProjectData />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectList;
