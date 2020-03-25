import React, { useState } from "react";
import { Link } from "react-router-dom";
import img100 from "css/assets/img/100_1.jpg";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const AllResources = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <>
      <div className="col-xl-4 col-lg-6">
        {/* <!--begin:: Widgets/Support Tickets --> */}
        <div className="kt-portlet kt-portlet--height-fluid">
          <div className="kt-portlet__head">
            <div className="kt-portlet__head-label">
              <h3 className="kt-portlet__head-title">All Resources</h3>
            </div>
            <div className="kt-portlet__head-toolbar">
              <div className="dropdown dropdown-inline">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle className="btn btn-clean btn-sm btn-icon-md btn-icon">
                    <i className="flaticon-more-1"></i>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <Link to="/manager/resources/add">
                      <DropdownItem>Add New Resource</DropdownItem>
                    </Link>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="kt-portlet__body">
            <div className="kt-widget3">
              <div className="kt-widget3__item">
                <div className="kt-widget3__header">
                  <div className="kt-widget3__user-img">
                    <img
                      className="kt-widget3__img project-manager"
                      src={img100}
                      alt=""
                    />
                  </div>
                  <div className="kt-widget3__info">
                    <Link
                      to="./pm-resource-view.html"
                      className="kt-widget3__username"
                    >
                      Melania Trump
                    </Link>
                    <br />
                    <span className="kt-widget3__time">Resourcifi</span>
                  </div>
                  <span className="kt-widget3__status kt-font-success">
                    Project Manager
                  </span>
                </div>
              </div>

              <div className="kt-widget3__item">
                <div className="kt-widget3__header">
                  <div className="kt-widget3__user-img">
                    <img
                      className="kt-widget3__img project-manager"
                      src={img100}
                      alt=""
                    />
                  </div>
                  <div className="kt-widget3__info">
                    <Link to="" className="kt-widget3__username">
                      Deb Gibson
                    </Link>
                    <br />
                    <span className="kt-widget3__time">3 weeks ago</span>
                  </div>
                  <span className="kt-widget3__status kt-font-info">
                    Team Lead
                  </span>
                </div>
              </div>
              <div className="kt-widget3__item">
                <div className="kt-widget3__header">
                  <div className="kt-widget3__user-img">
                    <img
                      className="kt-widget3__img project-manager"
                      src={img100}
                      alt=""
                    />
                  </div>
                  <div className="kt-widget3__info">
                    <Link to="" className="kt-widget3__username">
                      Deb Gibson
                    </Link>
                    <br />
                    <span className="kt-widget3__time">3 weeks ago</span>
                  </div>
                  <span className="kt-widget3__status kt-font-info">
                    UI Developer
                  </span>
                </div>
              </div>
              <div className="kt-widget3__item">
                <div className="kt-widget3__header">
                  <div className="kt-widget3__user-img">
                    <img
                      className="kt-widget3__img project-manager"
                      src={img100}
                      alt=""
                    />
                  </div>
                  <div className="kt-widget3__info">
                    <Link to="" className="kt-widget3__username">
                      Deb Gibson
                    </Link>
                    <br />
                    <span className="kt-widget3__time">3 weeks ago</span>
                  </div>
                  <span className="kt-widget3__status kt-font-info">
                    Quality Analyst
                  </span>
                </div>
              </div>
              <div className="kt-widget3__item">
                <div className="kt-widget3__header">
                  <Link
                    to="/manager/resources"
                    className="btn btn-sm btn-label-info wide-100per"
                  >
                    View all Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--end:: Widgets/Support Tickets --> */}
      </div>
    </>
  );
};

export default AllResources;
