import React, { useState } from "react";
import { Link } from "react-router-dom";
import img100 from "css/assets/img/100_1.jpg";
import img200 from "css/assets/img/100_2.jpg";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
const ClientList = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <>
      <div className="col-xl-4 col-lg-6 col-sm-6">
        {/* <!--begin:: Widgets/Support Tickets --> */}
        <div className="kt-portlet kt-portlet--height-fluid">
          <div className="kt-portlet__head">
            <div className="kt-portlet__head-label">
              <h3 className="kt-portlet__head-title">Client List</h3>
            </div>
            <div className="kt-portlet__head-toolbar">
              <div className="dropdown dropdown-inline">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle className="btn btn-clean btn-sm btn-icon-md btn-icon">
                    <i className="flaticon-more-1"></i>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <Link to="/companyadmin/clients/add">
                      <DropdownItem>Add New Project</DropdownItem>
                    </Link>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="kt-portlet__body">
            <div className="tab-content">
              <div className="tab-pane active" id="kt_widget4_tab1_content">
                <div className="kt-widget4">
                  <div className="kt-widget4__item">
                    <div className="kt-widget4__pic kt-widget4__pic--pic">
                      <img src={img100} alt="" />
                    </div>
                    <div className="kt-widget4__info">
                      <Link to="" className="kt-widget4__username">
                        Anna Strong
                      </Link>
                      <p className="kt-widget4__text">
                        Visual Designer,Google Inc
                      </p>
                    </div>
                    <span className="kt-widget3__status kt-font-info">
                      Sales Manager
                    </span>
                  </div>
                  <div className="kt-widget4__item">
                    <div className="kt-widget4__pic kt-widget4__pic--pic">
                      <img src={img200} alt="" />
                    </div>
                    <div className="kt-widget4__info">
                      <Link to="" className="kt-widget4__username">
                        Milano Esco
                      </Link>
                      <p className="kt-widget4__text">
                        Product Designer, Apple Inc
                      </p>
                    </div>
                    <span className="kt-widget3__status kt-font-info">
                      Marketing Head
                    </span>
                  </div>
                  <div className="kt-widget4__item">
                    <div className="kt-widget4__pic kt-widget4__pic--pic">
                      <img src={img100} alt="" />
                    </div>
                    <div className="kt-widget4__info">
                      <Link to="" className="kt-widget4__username">
                        Nick Bold
                      </Link>
                      <p className="kt-widget4__text">
                        Web Developer, Facebook Inc
                      </p>
                    </div>
                    <span className="kt-widget3__status kt-font-info">
                      Manager
                    </span>
                  </div>
                  <div className="kt-widget4__item">
                    <div className="kt-widget4__pic kt-widget4__pic--pic">
                      <img src={img200} alt="" />
                    </div>
                    <div className="kt-widget4__info">
                      <Link to="" className="kt-widget4__username">
                        Wiltor Delton
                      </Link>
                      <p className="kt-widget4__text">
                        Project Manager, Amazon Inc
                      </p>
                    </div>
                    <span className="kt-widget3__status kt-font-info">
                      Delivery Head
                    </span>
                  </div>
                  <div className="kt-widget4__item">
                    <div className="kt-widget4__pic kt-widget4__pic--pic">
                      <img src={img100} alt="" />
                    </div>
                    <div className="kt-widget4__info">
                      <Link to="" className="kt-widget4__username">
                        Anna Strong
                      </Link>
                      <p className="kt-widget4__text">
                        Visual Designer,Google Inc
                      </p>
                    </div>
                    <span className="kt-widget3__status kt-font-info">
                      Manager
                    </span>
                  </div>
                  <div className="kt-widget4__item">
                    <div className="kt-widget4__pic kt-widget4__pic--pic">
                      <img src={img200} alt="" />
                    </div>
                    <div className="kt-widget4__info">
                      <Link to="" className="kt-widget4__username">
                        Milano Esco
                      </Link>
                      <p className="kt-widget4__text">
                        Product Designer, Apple Inc
                      </p>
                    </div>
                    <span className="kt-widget3__status kt-font-info">
                      Marketing Head
                    </span>
                  </div>

                  <div className="kt-widget4__item">
                    <div className="kt-widget4__info">
                      <Link
                        to="/companyadmin/clients"
                        className="btn btn-sm btn-label-info"
                      >
                        View All Clients
                      </Link>
                    </div>
                  </div>
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

export default ClientList;
