import React from "react";
import ProfileForm from "./ProfileForm";
import { Link } from "react-router-dom";
const ProfileInfo = () => {
  return (
    <>
      <div className="kt-grid__item kt-grid__item--fluid kt-app__content">
        <div className="row">
          <div className="col-xl-12">
            <div className="kt-portlet">
              <div className="kt-portlet__head">
                <div className="kt-portlet__head-label">
                  <h3 className="kt-portlet__head-title">
                    Personal Information
                  </h3>
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
              <ProfileForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileInfo;
