import React, { Component } from "react";
import Layout from "hoc/Layout/Manager/Layout";
import img100 from "css/assets/img/100_1.jpg";
import img200 from "css/assets/img/100_2.jpg";
import { Link } from "react-router-dom";
class ProfileOverview extends Component {
  render() {
    return (
      <Layout name="profileoverview">
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
                    All Resources{" "}
                  </Link>

                  {/* <!-- <span className="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> --> */}
                </div>
              </div>
            </div>
          </div>

          {/* <!-- end:: Content Head --> */}

          <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
            {/* <!--begin:: Widgets/Applications/User/Profile3--> */}
            <div className="kt-portlet">
              <div className="kt-portlet__body">
                <div className="kt-widget kt-widget--user-profile-3">
                  <div className="kt-widget__top">
                    <div className="kt-widget__media kt-hidden-">
                      <img src={img100} alt="" />
                    </div>
                    <div className="kt-widget__pic kt-widget__pic--danger kt-font-danger kt-font-boldest kt-font-light kt-hidden">
                      JM
                    </div>
                    <div className="kt-widget__content">
                      <div className="kt-widget__head">
                        <Link
                          to="/manager/resources/1"
                          className="kt-widget__username"
                        >
                          Jason Muller
                          <i className="flaticon2-correct"></i>
                        </Link>
                      </div>
                      <div className="kt-widget__subhead">
                        <Link to="">
                          <i className="flaticon2-new-email"></i>
                          jason@siastudio.com
                        </Link>
                        <Link to="">
                          <i className="flaticon2-calendar-3"></i>Software
                          Developer
                        </Link>
                        <Link to="">
                          <i className="flaticon2-phone"></i>+91-999999999
                        </Link>
                        <Link to="">
                          <i className="flaticon2-calendar-3"></i>Sec 62, Noida
                        </Link>
                      </div>
                      <div className="kt-widget__info">
                        <div className="kt-widget__desc">
                          I distinguish three main text objektive could be
                          merely to inform people.
                          <br /> A second could be persuade people.You want
                          people to bay objective
                        </div>
                        <div className="kt-widget__progress">
                          <div className="kt-widget__text">Occupancy</div>
                          <div className="progress">
                            <div
                              className="progress-bar kt-bg-success wide-78"
                              role="progressbar"
                              aria-valuenow="65"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div className="kt-widget__stats">78%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget__bottom">
                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-piggy-bank"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">Status</span>
                        <span className="kt-widget__value">
                          <span></span>Active
                        </span>
                      </div>
                    </div>
                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-piggy-bank"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">Planned Leaves</span>
                        <span className="kt-widget__value">
                          <span></span>No leaves Applied
                        </span>
                      </div>
                    </div>

                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-pie-chart"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">
                          Date of Joining
                        </span>
                        <span className="kt-widget__value">
                          <span></span>2nd April
                        </span>
                      </div>
                    </div>
                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-file-2"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">
                          Availability Duration
                        </span>
                        <Link to="" className="kt-widget__value kt-font-brand">
                          4hrs
                        </Link>
                      </div>
                    </div>
                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-file-2"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">Skills</span>

                        <span className="kt-widget__value">
                          <span></span>HTML5, Bootstrap
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--end:: Widgets/Applications/User/Profile3-->

  <!--begin:: Widgets/Applications/User/Profile3--> */}
            <div className="kt-portlet">
              <div className="kt-portlet__body">
                <div className="kt-widget kt-widget--user-profile-3">
                  <div className="kt-widget__top">
                    <div className="kt-widget__media kt-hidden-">
                      <img src={img200} alt="" />
                    </div>
                    <div className="kt-widget__pic kt-widget__pic--danger kt-font-danger kt-font-boldest kt-font-light kt-hidden">
                      JM
                    </div>
                    <div className="kt-widget__content">
                      <div className="kt-widget__head">
                        <Link
                          to="/manager/resources/1"
                          className="kt-widget__username"
                        >
                          Matt Pears
                          <i className="flaticon2-correct"></i>
                        </Link>
                      </div>
                      <div className="kt-widget__subhead">
                        <Link to="">
                          <i className="flaticon2-new-email"></i>
                          jason@siastudio.com
                        </Link>
                        <Link to="">
                          <i className="flaticon2-calendar-3"></i>Software
                          Developer
                        </Link>
                        <Link to="">
                          <i className="flaticon2-phone"></i>+91-999999999
                        </Link>
                        <Link to="">
                          <i className="flaticon2-calendar-3"></i>Sec 62, Noida
                        </Link>
                      </div>
                      <div className="kt-widget__info">
                        <div className="kt-widget__desc">
                          I distinguish three main text objektive could be
                          merely to inform people.
                          <br /> A second could be persuade people.You want
                          people to bay objective
                        </div>
                        <div className="kt-widget__progress">
                          <div className="kt-widget__text">Occupancy</div>
                          <div className="progress">
                            <div
                              className="progress-bar kt-bg-success wide-78"
                              role="progressbar"
                              aria-valuenow="65"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div className="kt-widget__stats">78%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget__bottom">
                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-piggy-bank"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">Status</span>
                        <span className="kt-widget__value">
                          <span></span>Active
                        </span>
                      </div>
                    </div>
                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-piggy-bank"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">Planned Leaves</span>
                        <span className="kt-widget__value">
                          <span></span>No leaves Applied
                        </span>
                      </div>
                    </div>

                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-pie-chart"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">
                          Date of Joining
                        </span>
                        <span className="kt-widget__value">
                          <span></span>2nd April
                        </span>
                      </div>
                    </div>
                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-file-2"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">
                          Availability Duration
                        </span>
                        <Link to="" className="kt-widget__value kt-font-brand">
                          4hrs
                        </Link>
                      </div>
                    </div>
                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-file-2"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">Skills</span>

                        <span className="kt-widget__value">
                          <span></span>HTML5, Bootstrap
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
  <!--end:: Widgets/Applications/User/Profile3-->

                <!--begin:: Widgets/Applications/User/Profile3--> */}
            <div className="kt-portlet">
              <div className="kt-portlet__body">
                <div className="kt-widget kt-widget--user-profile-3">
                  <div className="kt-widget__top">
                    <div className="kt-widget__media kt-hidden-">
                      <img src={img100} alt="" />
                    </div>
                    <div className="kt-widget__pic kt-widget__pic--danger kt-font-danger kt-font-boldest kt-font-light kt-hidden">
                      JM
                    </div>
                    <div className="kt-widget__content">
                      <div className="kt-widget__head">
                        <Link
                          to="/manager/resources/1"
                          className="kt-widget__username"
                        >
                          Jason Muller
                          <i className="flaticon2-correct"></i>
                        </Link>
                      </div>
                      <div className="kt-widget__subhead">
                        <Link to="">
                          <i className="flaticon2-new-email"></i>
                          jason@siastudio.com
                        </Link>
                        <Link to="">
                          <i className="flaticon2-calendar-3"></i>Software
                          Developer
                        </Link>
                        <Link to="">
                          <i className="flaticon2-phone"></i>+91-999999999
                        </Link>
                        <Link to="">
                          <i className="flaticon2-calendar-3"></i>Sec 62, Noida
                        </Link>
                      </div>
                      <div className="kt-widget__info">
                        <div className="kt-widget__desc">
                          I distinguish three main text objektive could be
                          merely to inform people.
                          <br /> A second could be persuade people.You want
                          people to bay objective
                        </div>
                        <div className="kt-widget__progress">
                          <div className="kt-widget__text">Occupancy</div>
                          <div className="progress">
                            <div
                              className="progress-bar kt-bg-success wide-78"
                              role="progressbar"
                              aria-valuenow="65"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div className="kt-widget__stats">78%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget__bottom">
                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-piggy-bank"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">Status</span>
                        <span className="kt-widget__value">
                          <span></span>Active
                        </span>
                      </div>
                    </div>
                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-piggy-bank"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">Planned Leaves</span>
                        <span className="kt-widget__value">
                          <span></span>No leaves Applied
                        </span>
                      </div>
                    </div>

                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-pie-chart"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">
                          Date of Joining
                        </span>
                        <span className="kt-widget__value">
                          <span></span>2nd April
                        </span>
                      </div>
                    </div>
                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-file-2"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">
                          Availability Duration
                        </span>
                        <Link to="" className="kt-widget__value kt-font-brand">
                          4hrs
                        </Link>
                      </div>
                    </div>
                    <div className="kt-widget__item">
                      <div className="kt-widget__icon">
                        <i className="flaticon-file-2"></i>
                      </div>
                      <div className="kt-widget__details">
                        <span className="kt-widget__title">Skills</span>

                        <span className="kt-widget__value">
                          <span></span>HTML5, Bootstrap
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--end:: Widgets/Applications/User/Profile3-->

  <!--Begin::Section--> */}
            <div className="row">
              <div className="col-xl-12">
                {/* <!--begin:: Components/Pagination/Default--> */}
                <div className="kt-portlet">
                  <div className="kt-portlet__body">
                    {/* <!--begin: Pagination--> */}
                    <div className="kt-pagination kt-pagination--brand">
                      <ul className="kt-pagination__links">
                        <li className="kt-pagination__link--first">
                          <Link to="">
                            <i className="fa fa-angle-double-left kt-font-brand"></i>
                          </Link>
                        </li>
                        <li className="kt-pagination__link--next">
                          <Link to="">
                            <i className="fa fa-angle-left kt-font-brand"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="">...</Link>
                        </li>
                        <li>
                          <Link to="">29</Link>
                        </li>
                        <li>
                          <Link to="">30</Link>
                        </li>
                        <li className="kt-pagination__link--active">
                          <Link to="">31</Link>
                        </li>
                        <li>
                          <Link to="">32</Link>
                        </li>
                        <li>
                          <Link to="">33</Link>
                        </li>
                        <li>
                          <Link to="">34</Link>
                        </li>
                        <li>
                          <Link to="">...</Link>
                        </li>
                        <li className="kt-pagination__link--prev">
                          <Link to="">
                            <i className="fa fa-angle-right kt-font-brand"></i>
                          </Link>
                        </li>
                        <li className="kt-pagination__link--last">
                          <Link to="">
                            <i className="fa fa-angle-double-right kt-font-brand"></i>
                          </Link>
                        </li>
                      </ul>
                      <div className="kt-pagination__toolbar">
                        <select className="form-control kt-font-brand">
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="30">30</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        <span className="pagination__desc">
                          Displaying 10 of 230 records
                        </span>
                      </div>
                    </div>

                    {/* <!--end: Pagination--> */}
                  </div>
                </div>

                {/* <!--end:: Components/Pagination/Default--> */}
              </div>
            </div>

            {/* <!--End::Section--> */}
          </div>
        </div>
      </Layout>
    );
  }
}

export default ProfileOverview;
