import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const ProjectList = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div className="col-xl-4 col-lg-6">
      {/* <!--begin:: Widgets/Application Sales--> */}
      <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Project List</h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <div className="dropdown dropdown-inline">
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle className="btn btn-clean btn-sm btn-icon-md btn-icon">
                  <i className="flaticon-more-1"></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/manager/projects/add">
                    <DropdownItem>Add New Project</DropdownItem>
                  </Link>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="kt-portlet__body">
          <div className="tab-content">
            <div className="tab-pane active" id="kt_widget11_tab2_content">
              {/* <!--begin::Widget 11--> */}
              <div className="kt-widget11">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <td className="width1"></td>
                        <td className="width20">Application</td>
                        <td className="width20">Pending</td>

                        <td className="width20">Status</td>
                        <td className="kt-align-right width10">Total</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>
                          <span className="kt-widget11__title">Loop</span>
                          <span className="kt-widget11__sub">CRM System</span>
                        </td>
                        <td>19,200</td>

                        <td>
                          <span className="kt-badge kt-badge--danger kt-badge--inline">
                            in process
                          </span>
                        </td>
                        <td className="kt-align-right kt-font-brand">
                          $34,740
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <span className="kt-widget11__title">Loop</span>
                          <span className="kt-widget11__sub">CRM System</span>
                        </td>
                        <td>19,200</td>

                        <td>
                          <span className="kt-badge kt-badge--danger kt-badge--inline">
                            in process
                          </span>
                        </td>
                        <td className="kt-align-right kt-font-brand">
                          $34,740
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <span className="kt-widget11__title">Loop</span>
                          <span className="kt-widget11__sub">CRM System</span>
                        </td>
                        <td>19,200</td>

                        <td>
                          <span className="kt-badge kt-badge--danger kt-badge--inline">
                            in process
                          </span>
                        </td>
                        <td className="kt-align-right kt-font-brand">
                          $34,740
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <span className="kt-widget11__title">Loop</span>
                          <span className="kt-widget11__sub">CRM System</span>
                        </td>
                        <td>19,200</td>

                        <td>
                          <span className="kt-badge kt-badge--danger kt-badge--inline">
                            in process
                          </span>
                        </td>
                        <td className="kt-align-right kt-font-brand">
                          $34,740
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <span className="kt-widget11__title">Loop</span>
                          <span className="kt-widget11__sub">CRM System</span>
                        </td>
                        <td>19,200</td>

                        <td>
                          <span className="kt-badge kt-badge--danger kt-badge--inline">
                            in process
                          </span>
                        </td>
                        <td className="kt-align-right kt-font-brand">
                          $34,740
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="kt-widget4__info">
                    <Link
                      to="/manager/projects"
                      className="btn btn-sm btn-label-info wide-100per"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>

              {/* <!--end::Widget 11--> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!--end:: Widgets/Application Sales--> */}
    </div>
  );
};

export default ProjectList;
