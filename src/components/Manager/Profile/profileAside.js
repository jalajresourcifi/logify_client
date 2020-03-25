import React from "react";
import profilePic from "css/assets/img/100_1.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProfileAside = props => {
  const user = useSelector(state => state.auth.user);
  return (
    <>
      <div
        className="kt-grid__item kt-app__toggle kt-app__aside"
        id="kt_user_profile_aside"
      >
        <div className="kt-portlet kt-portlet--height-fluid-">
          <div className="kt-portlet__head  kt-portlet__head--noborder">
            <div className="kt-portlet__head-label">
              <h3 className="kt-portlet__head-title" aria-hidden="true"></h3>
            </div>
            <div className="kt-portlet__head-toolbar">
              <Link
                to=""
                className="btn btn-clean btn-sm btn-icon btn-icon-md"
                data-toggle="dropdown"
              >
                <i className="flaticon-more-1"></i>
              </Link>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-md">
                <ul className="kt-nav">
                  <li className="kt-nav__head">
                    Export Options
                    <span
                      data-toggle="kt-tooltip"
                      data-placement="right"
                      title=""
                      data-original-title="Click to learn more..."
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlinkHref="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        className="kt-svg-icon kt-svg-icon--brand kt-svg-icon--md1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect
                            id="bound"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          ></rect>
                          <circle
                            id="Oval-5"
                            fill="#000000"
                            opacity="0.3"
                            cx="12"
                            cy="12"
                            r="10"
                          ></circle>
                          <rect
                            id="Rectangle-9"
                            fill="#000000"
                            x="11"
                            y="10"
                            width="2"
                            height="7"
                            rx="1"
                          ></rect>
                          <rect
                            id="Rectangle-9-Copy"
                            fill="#000000"
                            x="11"
                            y="7"
                            width="2"
                            height="2"
                            rx="1"
                          ></rect>
                        </g>
                      </svg>{" "}
                    </span>
                  </li>
                  <li className="kt-nav__separator"></li>
                  <li className="kt-nav__item">
                    <Link to="" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-drop"></i>
                      <span className="kt-nav__link-text">Activity</span>
                    </Link>
                  </li>
                  <li className="kt-nav__item">
                    <Link to="" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-calendar-8"></i>
                      <span className="kt-nav__link-text">FAQ</span>
                    </Link>
                  </li>
                  <li className="kt-nav__item">
                    <Link to="" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-link"></i>
                      <span className="kt-nav__link-text">Settings</span>
                    </Link>
                  </li>
                  <li className="kt-nav__item">
                    <Link to="" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-new-email"></i>
                      <span className="kt-nav__link-text">Support</span>
                      <span className="kt-nav__link-badge">
                        <span className="kt-badge kt-badge--success kt-badge--rounded">
                          5
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li className="kt-nav__separator"></li>
                  <li className="kt-nav__foot">
                    <Link
                      className="btn btn-label-danger btn-bold btn-sm"
                      to=""
                    >
                      Upgrade plan
                    </Link>
                    <Link
                      className="btn btn-clean btn-bold btn-sm"
                      to=""
                      data-toggle="kt-tooltip"
                      data-placement="right"
                      title=""
                      data-original-title="Click to learn more..."
                    >
                      Learn more
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="kt-portlet__body kt-portlet__body--fit-y">
            <div className="kt-widget kt-widget--user-profile-1">
              <div className="kt-widget__head">
                <div className="kt-widget__media">
                  <img alt="" src={profilePic} />
                </div>
                <div className="kt-widget__content">
                  <div className="kt-widget__section">
                    <Link to="" className="kt-widget__username">
                      {user && user.fullname}
                      <i className="flaticon2-correct kt-font-success"></i>
                    </Link>
                    <span className="kt-widget__subtitle">
                      Head of Development
                    </span>
                  </div>
                </div>
              </div>
              <div className="kt-widget__body">
                <div className="kt-widget__content">
                  <div className="kt-widget__info">
                    <span className="kt-widget__label">Email:</span>
                    <Link to="" className="kt-widget__data">
                      {user && user.email}
                    </Link>
                  </div>
                  <div className="kt-widget__info">
                    <span className="kt-widget__label">Phone:</span>
                    <Link to="" className="kt-widget__data">
                      44(76)34254578
                    </Link>
                  </div>
                  <div className="kt-widget__info">
                    <span className="kt-widget__label">Location:</span>
                    <span className="kt-widget__data">Melbourne</span>
                  </div>
                </div>
                <div className="kt-widget__items">
                  <Link
                    to="/manager/profileoverview"
                    className="kt-widget__item"
                  >
                    <span className="kt-widget__section">
                      <span className="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          className="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Shape"
                              points="0 0 24 0 24 24 0 24"
                            ></polygon>
                            <path
                              d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                              id="Mask"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            ></path>
                            <path
                              d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                              id="Mask-Copy"
                              fill="#000000"
                              fillRule="nonzero"
                            ></path>
                          </g>
                        </svg>{" "}
                      </span>
                      <span className="kt-widget__desc">
                        Profile Information
                      </span>
                    </span>
                  </Link>

                  <Link
                    to="/manager/changepassword"
                    className="kt-widget__item "
                  >
                    <span className="kt-widget__section">
                      <span className="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          className="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            ></rect>
                            <path
                              d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                              id="Path-50"
                              fill="#000000"
                              opacity="0.3"
                            ></path>
                            <path
                              d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z"
                              id="Mask"
                              fill="#000000"
                              opacity="0.3"
                            ></path>
                            <path
                              d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                              id="Mask-Copy"
                              fill="#000000"
                              opacity="0.3"
                            ></path>
                          </g>
                        </svg>{" "}
                      </span>
                      <span className="kt-widget__desc">Change Password</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileAside;
