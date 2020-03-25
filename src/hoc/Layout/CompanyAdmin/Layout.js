import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "css/assets/css/style.bundle.css";
import "css/assets/css/demo1/skins/header/base/light.css";
import "css/assets/css/demo1/skins/header/menu/light.css";
import "css/assets/css/demo1/skins/brand/dark.css";
import "css/assets/css/demo1/skins/aside/dark.css";
import "css/assets/css/wizard-1.css";
import "css/assets/css/custom.css";
import "css/assets/css/flaticon/flaticon.css";
import "css/assets/css/flaticon2/flaticon.css";
import "css/assets/css/line-awesome/css/line-awesome.css";
import logifiLogo from "css/assets/img/logos/logifi.png";
import "./Layout.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { logoutSuccess } from "redux/actions/auth";
const mapDispatchToProps = dispatch => ({
  _logout: () => dispatch(logoutSuccess())
});
const mapStateToProps = state => {
  return { user: state.auth.user };
};
class Layout extends Component {
  state = {
    dropdownOpen: false,
    modal: false,
    dropdownNotificationOpen: false
  };
  toggleDropdown = e => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  toggleDropdownNotification = e => {
    this.setState({
      dropdownNotificationOpen: !this.state.dropdownNotificationOpen
    });
  };
  toggleModal = e => {
    this.setState({ modal: !this.state.modal });
  };
  doNothing = e => {
    e.preventDefault();
  };
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading">
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={"modals"}
        >
          <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <div
          id="kt_header_mobile"
          className="kt-header-mobile  kt-header-mobile--fixed "
        >
          <div className="kt-aside__brand-logo">
            <Link to="/companyadmin/dashboard">
              <img alt="" src={logifiLogo} />
            </Link>
          </div>
          <div className="kt-header-mobile__toolbar">
            <button
              className="kt-header-mobile__toggler kt-header-mobile__toggler--left"
              id="kt_aside_mobile_toggler"
            >
              <span></span>
            </button>
            <button
              className="kt-header-mobile__toggler"
              id="kt_header_mobile_toggler"
            >
              <span></span>
            </button>
            <button
              className="kt-header-mobile__topbar-toggler"
              id="kt_header_mobile_topbar_toggler"
            >
              <i className="flaticon-more"></i>
            </button>
          </div>
        </div>

        <div className="kt-grid kt-grid--hor kt-grid--root">
          <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
            <button className="kt-aside-close " id="kt_aside_close_btn">
              <i className="la la-close"></i>
            </button>
            <div
              className="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop"
              id="kt_aside"
            >
              <div
                className="kt-aside__brand kt-grid__item "
                id="kt_aside_brand"
              >
                <div className="kt-aside__brand-logo">
                  <Link to="/companyadmin/dashboard">
                    <img alt="" src={logifiLogo} />
                  </Link>
                </div>
                <div className="kt-aside__brand-tools">
                  <button
                    className="kt-aside__brand-aside-toggler"
                    id="kt_aside_toggler"
                  >
                    <span>
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
                          <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z"
                            id="Path-94"
                            fill="#000000"
                            fillRule="nonzero"
                            transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999) "
                          />
                          <path
                            d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z"
                            id="Path-94"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                            transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999) "
                          />
                        </g>
                      </svg>
                    </span>
                    <span>
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
                          <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z"
                            id="Path-94"
                            fill="#000000"
                            fillRule="nonzero"
                          />
                          <path
                            d="M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z"
                            id="Path-94"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                            transform="translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999) "
                          />
                        </g>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div
                className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid"
                id="kt_aside_menu_wrapper"
              >
                <div
                  id="kt_aside_menu"
                  className="kt-aside-menu "
                  data-ktmenu-vertical="1"
                  data-ktmenu-scroll="1"
                  data-ktmenu-dropdown-timeout="500"
                >
                  <ul className="kt-menu__nav ">
                    <li
                      className={
                        "kt-menu__item " +
                        (this.props.name === "dashboard"
                          ? "kt-menu__item--active"
                          : "")
                      }
                      aria-haspopup="true"
                    >
                      <Link
                        to="/companyadmin/dashboard"
                        className="kt-menu__link "
                      >
                        <span className="kt-menu__link-icon">
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
                                id="Bound"
                                points="0 0 24 0 24 24 0 24"
                              />
                              <path
                                d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                                id="Shape"
                                fill="#000000"
                                fillRule="nonzero"
                              />
                              <path
                                d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                                id="Path"
                                fill="#000000"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        <span className="kt-menu__link-text">Dashboard</span>
                      </Link>
                    </li>

                    <li
                      className={
                        "kt-menu__item  kt-menu__item--submenu " +
                        (this.props.name === "profile"
                          ? "kt-menu__item--active"
                          : "")
                      }
                      aria-haspopup="true"
                      data-ktmenu-submenu-toggle="hover"
                    >
                      <Link
                        to="/companyadmin/profileoverview"
                        className="kt-menu__link kt-menu__toggle"
                      >
                        <span className="kt-menu__link-icon">
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
                              />
                              <rect
                                id="Rectangle-7"
                                fill="#000000"
                                x="4"
                                y="4"
                                width="7"
                                height="7"
                                rx="1.5"
                              />
                              <path
                                d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                id="Combined-Shape"
                                fill="#000000"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        <span className="kt-menu__link-text">Profile</span>
                        <i className="kt-menu__ver-arrow la la-angle-right"></i>
                      </Link>
                    </li>

                    {/* <li
                      className="kt-menu__item  kt-menu__item--submenu kt-menu__item--open kt-menu__item--here"
                      aria-haspopup="true"
                      data-ktmenu-submenu-toggle="hover"
                    >
                      <Link to="" className="kt-menu__link kt-menu__toggle">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                          <span></span>
                        </i>
                        <span className="kt-menu__link-text">Projects</span>
                        <i className="kt-menu__ver-arrow la la-angle-right"></i>
                      </Link>
                      <div className="kt-menu__submenu" id="projects">
                        <span className="kt-menu__arrow"></span>
                        <ul className="kt-menu__subnav">
                          <li className="kt-menu__item" aria-haspopup="true">
                            <Link to="/companyadmin/projects" className="kt-menu__link ">
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span></span>
                              </i>
                              <span className="kt-menu__link-text">
                                Project List
                              </span>
                            </Link>
                          </li>
                          <li className="kt-menu__item" aria-haspopup="true">
                            <Link to="/projectview" className="kt-menu__link ">
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span></span>
                              </i>
                              <span className="kt-menu__link-text">
                                View Project
                              </span>
                            </Link>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
                            <Link
                              to="./projects-add.html"
                              className="kt-menu__link "
                            >
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span></span>
                              </i>
                              <span className="kt-menu__link-text">
                                Add Project
                              </span>
                            </Link>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
                            <Link
                              to="./projects-edit.html"
                              className="kt-menu__link "
                            >
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span></span>
                              </i>
                              <span className="kt-menu__link-text">
                                Edit Project
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li> */}
                    <li
                      className={
                        "kt-menu__item  kt-menu__item--submenu " +
                        (this.props.name === "project"
                          ? "kt-menu__item--active"
                          : "")
                      }
                      aria-haspopup="true"
                      data-ktmenu-submenu-toggle="hover"
                    >
                      <Link
                        to="/companyadmin/projects"
                        className="kt-menu__link kt-menu__toggle"
                      >
                        <span className="kt-menu__link-icon">
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
                              />
                              <rect
                                id="Rectangle-7"
                                fill="#000000"
                                x="4"
                                y="4"
                                width="7"
                                height="7"
                                rx="1.5"
                              />
                              <path
                                d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                id="Combined-Shape"
                                fill="#000000"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        <span className="kt-menu__link-text">Project</span>
                        <i className="kt-menu__ver-arrow la la-angle-right"></i>
                      </Link>
                    </li>
                    <li
                      className={
                        "kt-menu__item  kt-menu__item--submenu " +
                        (this.props.name === "worklogs"
                          ? "kt-menu__item--active"
                          : "")
                      }
                      aria-haspopup="true"
                      data-ktmenu-submenu-toggle="hover"
                    >
                      <Link
                        to="/companyadmin/worklogs"
                        className="kt-menu__link kt-menu__toggle"
                      >
                        <span className="kt-menu__link-icon">
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
                              />
                              <rect
                                id="Rectangle-7"
                                fill="#000000"
                                x="4"
                                y="4"
                                width="7"
                                height="7"
                                rx="1.5"
                              />
                              <path
                                d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                id="Combined-Shape"
                                fill="#000000"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        <span className="kt-menu__link-text">Work Logs</span>
                        <i className="kt-menu__ver-arrow la la-angle-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
              id="kt_wrapper"
            >
              <div
                id="kt_header"
                className="kt-header kt-grid__item  kt-header--fixed "
              >
                <button
                  className="kt-header-menu-wrapper-close"
                  id="kt_header_menu_mobile_close_btn"
                >
                  <i className="la la-close"></i>
                </button>
                <div
                  className="kt-header-menu-wrapper"
                  id="kt_header_menu_wrapper"
                ></div>

                <div className="kt-header__topbar">
                  <div
                    className="kt-header__topbar-item kt-header__topbar-item--search dropdown"
                    id="kt_quick_search_toggle"
                  >
                    <div
                      className="kt-header__topbar-wrapper"
                      data-toggle="dropdown"
                      data-offset="10px,0px"
                    >
                      <span className="kt-header__topbar-icon">
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
                            />
                            <path
                              d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                              id="Path-2"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                            <path
                              d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                              id="Path"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                          </g>
                        </svg>{" "}
                      </span>
                    </div>
                    <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-lg">
                      <div
                        className="kt-quick-search kt-quick-search--inline"
                        id="kt_quick_search_inline"
                      >
                        <form method="get" className="kt-quick-search__form">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="flaticon2-search-1"></i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control kt-quick-search__input"
                              placeholder="Search..."
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="la la-close kt-quick-search__close"></i>
                              </span>
                            </div>
                          </div>
                        </form>
                        <div
                          className="kt-quick-search__wrapper kt-scroll"
                          data-scroll="true"
                          data-height="300"
                          data-mobile-height="200"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="kt-header__topbar-item dropdown">
                    <div
                      className="kt-header__topbar-wrapper"
                      data-toggle="dropdown"
                      data-offset="30px,0px"
                      aria-expanded="true"
                    >
                      <Dropdown
                        isOpen={this.state.dropdownNotificationOpen}
                        toggle={this.toggleDropdownNotification}
                        className="notification-dropdown"
                      >
                        <DropdownToggle>
                          <span className="kt-header__topbar-icon kt-pulse kt-pulse--brand">
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
                                />
                                <path
                                  d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                                  id="Combined-Shape"
                                  fill="#000000"
                                  opacity="0.3"
                                />
                                <path
                                  d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                                  id="Combined-Shape"
                                  fill="#000000"
                                />
                              </g>
                            </svg>{" "}
                            <span className="kt-pulse__ring"></span>
                          </span>
                        </DropdownToggle>
                        <DropdownMenu
                          right
                          className="notification-dropdown-menu"
                        >
                          <DropdownItem className=" notification-header">
                            <span className="notification-dropdown-option font-weight-bold  text-dark">
                              Notifications
                            </span>
                          </DropdownItem>

                          <DropdownItem divider />
                          <div className="notification-wrapper ">
                            <DropdownItem className="notification-dropdown-button">
                              <span className="notification-dropdown-option text-dark">
                                <Link to="">hammadbhat@gmail.com:</Link> Added a
                                Photo
                              </span>
                            </DropdownItem>
                            <DropdownItem className="notification-dropdown-button">
                              <span className="notification-dropdown-option text-dark">
                                <Link to="">hammadbhat@gmail.com:</Link> Tagged
                                you in a Photo
                              </span>
                            </DropdownItem>
                            <DropdownItem className="notification-dropdown-button">
                              <span className="notification-dropdown-option text-dark">
                                <Link to="">hammadbhat@gmail.com:</Link>{" "}
                                UnTagged you in a Photo
                              </span>
                            </DropdownItem>
                            <DropdownItem className="notification-dropdown-button">
                              <span className="notification-dropdown-option text-dark">
                                <Link to="">hammadbhat@gmail.com:</Link>{" "}
                                UnTagged you in a Photo
                              </span>
                            </DropdownItem>
                            <DropdownItem className="notification-dropdown-button">
                              <span className="notification-dropdown-option text-dark">
                                <Link to="">hammadbhat@gmail.com:</Link>{" "}
                                UnTagged you in a Photo
                              </span>
                            </DropdownItem>
                            <DropdownItem className="notification-dropdown-button">
                              <span className="notification-dropdown-option text-dark">
                                <Link to="">hammadbhat@gmail.com:</Link>{" "}
                                UnTagged you in a Photo
                              </span>
                            </DropdownItem>
                            <DropdownItem className="notification-dropdown-button">
                              <span className="notification-dropdown-option text-dark">
                                <Link to="">hammadbhat@gmail.com:</Link>{" "}
                                UnTagged you in a Photo
                              </span>
                            </DropdownItem>
                            <DropdownItem className="notification-dropdown-button">
                              <span className="notification-dropdown-option text-dark">
                                <Link to="">hammadbhat@gmail.com:</Link>{" "}
                                UnTagged you in a Photo
                              </span>
                            </DropdownItem>
                            <DropdownItem className="notification-dropdown-button">
                              <span className="notification-dropdown-option text-dark">
                                <Link to="">hammadbhat@gmail.com:</Link>{" "}
                                UnTagged you in a Photo
                              </span>
                            </DropdownItem>
                          </div>
                          <Link to="/notifications">
                            <DropdownItem className="bg-secondary text-center">
                              <span className="notification-dropdown-showmore text-dark">
                                Show more
                              </span>
                            </DropdownItem>
                          </Link>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg">
                      <form>
                        <div className="kt-head kt-head--skin-dark kt-head--fit-x kt-head--fit-b kt-bg-1">
                          <h3 className="kt-head__title">
                            User Notifications &nbsp;
                            <span className="btn btn-success btn-sm btn-bold btn-font-md">
                              23 new
                            </span>
                          </h3>
                          <ul
                            className="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-success kt-notification-item-padding-x"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <Link
                                className="nav-link active show"
                                data-toggle="tab"
                                to="#topbar_notifications_notifications"
                                role="tab"
                                aria-selected="true"
                              >
                                Alerts
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                data-toggle="tab"
                                to="#topbar_notifications_events"
                                role="tab"
                                aria-selected="false"
                              >
                                Events
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                data-toggle="tab"
                                to="#topbar_notifications_logs"
                                role="tab"
                                aria-selected="false"
                              >
                                Logs
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className="tab-content">
                          <div
                            className="tab-pane active show"
                            id="topbar_notifications_notifications"
                            role="tabpanel"
                          >
                            <div
                              className="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll"
                              data-scroll="true"
                              data-height="300"
                              data-mobile-height="200"
                            >
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-line-chart kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New order has been received
                                  </div>
                                  <div className="kt-notification__item-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-box-1 kt-font-brand"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New customer is registered
                                  </div>
                                  <div className="kt-notification__item-time">
                                    3 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-chart2 kt-font-danger"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    Application has been approved
                                  </div>
                                  <div className="kt-notification__item-time">
                                    3 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-image-file kt-font-warning"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New file has been uploaded
                                  </div>
                                  <div className="kt-notification__item-time">
                                    5 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-bar-chart kt-font-info"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New user feedback received
                                  </div>
                                  <div className="kt-notification__item-time">
                                    8 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-pie-chart-2 kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    System reboot has been successfully
                                    completed
                                  </div>
                                  <div className="kt-notification__item-time">
                                    12 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-favourite kt-font-danger"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New order has been placed
                                  </div>
                                  <div className="kt-notification__item-time">
                                    15 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link
                                to=""
                                className="kt-notification__item kt-notification__item--read"
                              >
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-safe kt-font-primary"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    Company meeting canceled
                                  </div>
                                  <div className="kt-notification__item-time">
                                    19 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-psd kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New report has been received
                                  </div>
                                  <div className="kt-notification__item-time">
                                    23 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon-download-1 kt-font-danger"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    Finance report has been generated
                                  </div>
                                  <div className="kt-notification__item-time">
                                    25 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon-security kt-font-warning"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New customer comment recieved
                                  </div>
                                  <div className="kt-notification__item-time">
                                    2 days ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-pie-chart kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New customer is registered
                                  </div>
                                  <div className="kt-notification__item-time">
                                    3 days ago
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div
                            className="tab-pane"
                            id="topbar_notifications_events"
                            role="tabpanel"
                          >
                            <div
                              className="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll"
                              data-scroll="true"
                              data-height="300"
                              data-mobile-height="200"
                            >
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-psd kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New report has been received
                                  </div>
                                  <div className="kt-notification__item-time">
                                    23 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon-download-1 kt-font-danger"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    Finance report has been generated
                                  </div>
                                  <div className="kt-notification__item-time">
                                    25 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-line-chart kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New order has been received
                                  </div>
                                  <div className="kt-notification__item-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-box-1 kt-font-brand"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New customer is registered
                                  </div>
                                  <div className="kt-notification__item-time">
                                    3 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-chart2 kt-font-danger"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    Application has been approved
                                  </div>
                                  <div className="kt-notification__item-time">
                                    3 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-image-file kt-font-warning"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New file has been uploaded
                                  </div>
                                  <div className="kt-notification__item-time">
                                    5 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-bar-chart kt-font-info"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New user feedback received
                                  </div>
                                  <div className="kt-notification__item-time">
                                    8 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-pie-chart-2 kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    System reboot has been successfully
                                    completed
                                  </div>
                                  <div className="kt-notification__item-time">
                                    12 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-favourite kt-font-brand"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New order has been placed
                                  </div>
                                  <div className="kt-notification__item-time">
                                    15 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link
                                to=""
                                className="kt-notification__item kt-notification__item--read"
                              >
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-safe kt-font-primary"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    Company meeting canceled
                                  </div>
                                  <div className="kt-notification__item-time">
                                    19 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-psd kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New report has been received
                                  </div>
                                  <div className="kt-notification__item-time">
                                    23 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon-download-1 kt-font-danger"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    Finance report has been generated
                                  </div>
                                  <div className="kt-notification__item-time">
                                    25 hrs ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon-security kt-font-warning"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New customer comment recieved
                                  </div>
                                  <div className="kt-notification__item-time">
                                    2 days ago
                                  </div>
                                </div>
                              </Link>
                              <Link to="" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                  <i className="flaticon2-pie-chart kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                  <div className="kt-notification__item-title">
                                    New customer is registered
                                  </div>
                                  <div className="kt-notification__item-time">
                                    3 days ago
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div
                            className="tab-pane"
                            id="topbar_notifications_logs"
                            role="tabpanel"
                          >
                            <div className="kt-grid kt-grid--ver kt-min-h">
                              <div className="kt-grid kt-grid--hor kt-grid__item kt-grid__item--fluid kt-grid__item--middle">
                                <div className="kt-grid__item kt-grid__item--middle kt-align-center">
                                  All caught up!
                                  <br />
                                  No new notifications.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="kt-header__topbar-item kt-header__topbar-item--user">
                    <div
                      className="kt-header__topbar-wrapper"
                      data-toggle="dropdown"
                      data-offset="0px,0px"
                    >
                      <div className="kt-header__topbar-user">
                        <span className="kt-header__topbar-welcome kt-hidden-mobile">
                          Hi,
                        </span>
                        <span className="kt-header__topbar-username kt-hidden-mobile">
                          {this.props.user && this.props.user.fullname}
                        </span>
                        <img
                          alt=""
                          className="kt-hidden"
                          src="css/assets/media/users/300_25.jpg"
                        />
                        <Dropdown
                          isOpen={this.state.dropdownOpen}
                          toggle={this.toggleDropdown}
                        >
                          <DropdownToggle caret>
                            <span className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">
                              S
                            </span>
                          </DropdownToggle>
                          <DropdownMenu>
                            <Link to="/companyadmin/profileoverview">
                              <DropdownItem>
                                <span className="general-dropdown-option">
                                  Your Profile
                                </span>
                              </DropdownItem>
                            </Link>
                            <DropdownItem divider />
                            <Link
                              to="/settings"
                              onClick={e => {
                                e.preventDefault();
                                this.toggleModal();
                              }}
                            >
                              <DropdownItem>
                                <span className="general-dropdown-option">
                                  Settings
                                </span>
                              </DropdownItem>
                            </Link>
                            <Link onClick={this.props._logout}>
                              <DropdownItem>
                                <span className="general-dropdown-option">
                                  Logout
                                </span>
                              </DropdownItem>
                            </Link>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
                      <div className="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x kt-bg-1">
                        <div className="kt-user-card__avatar">
                          <img
                            alt=""
                            className="kt-hidden"
                            src="css/assets/media/users/300_25.jpg"
                          />

                          <span className="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success">
                            S
                          </span>
                        </div>
                        <div className="kt-user-card__name">Sean Stone</div>
                        <div className="kt-user-card__badge">
                          <span className="btn btn-success btn-sm btn-bold btn-font-md">
                            23 messages
                          </span>
                        </div>
                      </div>

                      <div className="kt-notification">
                        <Link to="" className="kt-notification__item">
                          <div className="kt-notification__item-icon">
                            <i className="flaticon2-calendar-3 kt-font-success"></i>
                          </div>
                          <div className="kt-notification__item-details">
                            <div className="kt-notification__item-title kt-font-bold">
                              My Profile
                            </div>
                            <div className="kt-notification__item-time">
                              Account settings and more
                            </div>
                          </div>
                        </Link>
                        <Link to="" className="kt-notification__item">
                          <div className="kt-notification__item-icon">
                            <i className="flaticon2-mail kt-font-warning"></i>
                          </div>
                          <div className="kt-notification__item-details">
                            <div className="kt-notification__item-title kt-font-bold">
                              My Messages
                            </div>
                            <div className="kt-notification__item-time">
                              Inbox and tasks
                            </div>
                          </div>
                        </Link>
                        <Link to="" className="kt-notification__item">
                          <div className="kt-notification__item-icon">
                            <i className="flaticon2-rocket-1 kt-font-danger"></i>
                          </div>
                          <div className="kt-notification__item-details">
                            <div className="kt-notification__item-title kt-font-bold">
                              My Activities
                            </div>
                            <div className="kt-notification__item-time">
                              Logs and notifications
                            </div>
                          </div>
                        </Link>
                        <Link to="" className="kt-notification__item">
                          <div className="kt-notification__item-icon">
                            <i className="flaticon2-hourglass kt-font-brand"></i>
                          </div>
                          <div className="kt-notification__item-details">
                            <div className="kt-notification__item-title kt-font-bold">
                              My Tasks
                            </div>
                            <div className="kt-notification__item-time">
                              latest tasks and projects
                            </div>
                          </div>
                        </Link>
                        <Link to="" className="kt-notification__item">
                          <div className="kt-notification__item-icon">
                            <i className="flaticon2-cardiogram kt-font-warning"></i>
                          </div>
                          <div className="kt-notification__item-details">
                            <div className="kt-notification__item-title kt-font-bold">
                              Billing
                            </div>
                            <div className="kt-notification__item-time">
                              billing & statements{" "}
                              <span className="kt-badge kt-badge--danger kt-badge--inline kt-badge--pill kt-badge--rounded">
                                2 pending
                              </span>
                            </div>
                          </div>
                        </Link>
                        <div className="kt-notification__custom kt-space-between">
                          <Link
                            to="demo1/custom/user/login-v2.html"
                            target="_blank"
                            className="btn btn-label btn-label-brand btn-sm btn-bold"
                          >
                            Sign Out
                          </Link>
                          <Link
                            to="demo1/custom/user/login-v2.html"
                            target="_blank"
                            className="btn btn-clean btn-sm btn-bold"
                          >
                            Upgrade Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {this.props.children}

              <div
                className="kt-footer  kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop"
                id="kt_footer"
              >
                <div className="kt-container  kt-container--fluid ">
                  <div className="kt-footer__copyright">
                    2019&nbsp;&copy;&nbsp;
                    <Link to="" target="_blank" className="kt-link">
                      Logifi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="kt_quick_panel" className="kt-quick-panel">
          <Link
            to=""
            className="kt-quick-panel__close"
            id="kt_quick_panel_close_btn"
          >
            <i className="flaticon2-delete"></i>
          </Link>
          <div className="kt-quick-panel__nav">
            <ul
              className="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-brand  kt-notification-item-padding-x"
              role="tablist"
            >
              <li className="nav-item active">
                <Link
                  className="nav-link active"
                  data-toggle="tab"
                  to="#kt_quick_panel_tab_notifications"
                  role="tab"
                >
                  Notifications
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  to="#kt_quick_panel_tab_logs"
                  role="tab"
                >
                  Audit Logs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  to="#kt_quick_panel_tab_settings"
                  role="tab"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
          <div className="kt-quick-panel__content">
            <div className="tab-content">
              <div
                className="tab-pane fade show kt-scroll active"
                id="kt_quick_panel_tab_notifications"
                role="tabpanel"
              >
                <div className="kt-notification">
                  <Link to="" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                      <i className="flaticon2-line-chart kt-font-success"></i>
                    </div>
                    <div className="kt-notification__item-details">
                      <div className="kt-notification__item-title">
                        New order has been received
                      </div>
                      <div className="kt-notification__item-time">
                        2 hrs ago
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                      <i className="flaticon2-box-1 kt-font-brand"></i>
                    </div>
                    <div className="kt-notification__item-details">
                      <div className="kt-notification__item-title">
                        New customer is registered
                      </div>
                      <div className="kt-notification__item-time">
                        3 hrs ago
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                      <i className="flaticon2-chart2 kt-font-danger"></i>
                    </div>
                    <div className="kt-notification__item-details">
                      <div className="kt-notification__item-title">
                        Application has been approved
                      </div>
                      <div className="kt-notification__item-time">
                        3 hrs ago
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                      <i className="flaticon2-image-file kt-font-warning"></i>
                    </div>
                    <div className="kt-notification__item-details">
                      <div className="kt-notification__item-title">
                        New file has been uploaded
                      </div>
                      <div className="kt-notification__item-time">
                        5 hrs ago
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                      <i className="flaticon2-bar-chart kt-font-info"></i>
                    </div>
                    <div className="kt-notification__item-details">
                      <div className="kt-notification__item-title">
                        New user feedback received
                      </div>
                      <div className="kt-notification__item-time">
                        8 hrs ago
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                      <i className="flaticon2-pie-chart-2 kt-font-success"></i>
                    </div>
                    <div className="kt-notification__item-details">
                      <div className="kt-notification__item-title">
                        System reboot has been successfully completed
                      </div>
                      <div className="kt-notification__item-time">
                        12 hrs ago
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                      <i className="flaticon2-favourite kt-font-danger"></i>
                    </div>
                    <div className="kt-notification__item-details">
                      <div className="kt-notification__item-title">
                        New order has been placed
                      </div>
                      <div className="kt-notification__item-time">
                        15 hrs ago
                      </div>
                    </div>
                  </Link>
                  <Link
                    to=""
                    className="kt-notification__item kt-notification__item--read"
                  >
                    <div className="kt-notification__item-icon">
                      <i className="flaticon2-safe kt-font-primary"></i>
                    </div>
                    <div className="kt-notification__item-details">
                      <div className="kt-notification__item-title">
                        Company meeting canceled
                      </div>
                      <div className="kt-notification__item-time">
                        19 hrs ago
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                      <i className="flaticon2-psd kt-font-success"></i>
                    </div>
                    <div className="kt-notification__item-details">
                      <div className="kt-notification__item-title">
                        New report has been received
                      </div>
                      <div className="kt-notification__item-time">
                        23 hrs ago
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                      <i className="flaticon-download-1 kt-font-danger"></i>
                    </div>
                    <div className="kt-notification__item-details">
                      <div className="kt-notification__item-title">
                        Finance report has been generated
                      </div>
                      <div className="kt-notification__item-time">
                        25 hrs ago
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                      <i className="flaticon-security kt-font-warning"></i>
                    </div>
                    <div className="kt-notification__item-details">
                      <div className="kt-notification__item-title">
                        New customer comment recieved
                      </div>
                      <div className="kt-notification__item-time">
                        2 days ago
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                      <i className="flaticon2-pie-chart kt-font-warning"></i>
                    </div>
                    <div className="kt-notification__item-details">
                      <div className="kt-notification__item-title">
                        New customer is registered
                      </div>
                      <div className="kt-notification__item-time">
                        3 days ago
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="tab-pane fade kt-scroll"
                id="kt_quick_panel_tab_logs"
                role="tabpanel"
              >
                <div className="kt-notification-v2">
                  <Link to="" className="kt-notification-v2__item">
                    <div className="kt-notification-v2__item-icon">
                      <i className="flaticon-bell kt-font-brand"></i>
                    </div>
                    <div className="kt-notification-v2__itek-wrapper">
                      <div className="kt-notification-v2__item-title">
                        5 new user generated report
                      </div>
                      <div className="kt-notification-v2__item-desc">
                        Reports based on sales
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification-v2__item">
                    <div className="kt-notification-v2__item-icon">
                      <i className="flaticon2-box kt-font-danger"></i>
                    </div>
                    <div className="kt-notification-v2__itek-wrapper">
                      <div className="kt-notification-v2__item-title">
                        2 new items submited
                      </div>
                      <div className="kt-notification-v2__item-desc">
                        by Grog John
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification-v2__item">
                    <div className="kt-notification-v2__item-icon">
                      <i className="flaticon-psd kt-font-brand"></i>
                    </div>
                    <div className="kt-notification-v2__itek-wrapper">
                      <div className="kt-notification-v2__item-title">
                        79 PSD files generated
                      </div>
                      <div className="kt-notification-v2__item-desc">
                        Reports based on sales
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification-v2__item">
                    <div className="kt-notification-v2__item-icon">
                      <i className="flaticon2-supermarket kt-font-warning"></i>
                    </div>
                    <div className="kt-notification-v2__itek-wrapper">
                      <div className="kt-notification-v2__item-title">
                        $2900 worth producucts sold
                      </div>
                      <div className="kt-notification-v2__item-desc">
                        Total 234 items
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification-v2__item">
                    <div className="kt-notification-v2__item-icon">
                      <i className="flaticon-paper-plane-1 kt-font-success"></i>
                    </div>
                    <div className="kt-notification-v2__itek-wrapper">
                      <div className="kt-notification-v2__item-title">
                        4.5h-avarage response time
                      </div>
                      <div className="kt-notification-v2__item-desc">
                        Fostest is Barry
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification-v2__item">
                    <div className="kt-notification-v2__item-icon">
                      <i className="flaticon2-information kt-font-danger"></i>
                    </div>
                    <div className="kt-notification-v2__itek-wrapper">
                      <div className="kt-notification-v2__item-title">
                        Database server is down
                      </div>
                      <div className="kt-notification-v2__item-desc">
                        10 mins ago
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification-v2__item">
                    <div className="kt-notification-v2__item-icon">
                      <i className="flaticon2-mail-1 kt-font-brand"></i>
                    </div>
                    <div className="kt-notification-v2__itek-wrapper">
                      <div className="kt-notification-v2__item-title">
                        System report has been generated
                      </div>
                      <div className="kt-notification-v2__item-desc">
                        Fostest is Barry
                      </div>
                    </div>
                  </Link>
                  <Link to="" className="kt-notification-v2__item">
                    <div className="kt-notification-v2__item-icon">
                      <i className="flaticon2-hangouts-logo kt-font-warning"></i>
                    </div>
                    <div className="kt-notification-v2__itek-wrapper">
                      <div className="kt-notification-v2__item-title">
                        4.5h-avarage response time
                      </div>
                      <div className="kt-notification-v2__item-desc">
                        Fostest is Barry
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="tab-pane kt-quick-panel__content-padding-x fade kt-scroll"
                id="kt_quick_panel_tab_settings"
                role="tabpanel"
              >
                <form className="kt-form">
                  <div className="kt-heading kt-heading--sm kt-heading--space-sm">
                    Customer Care
                  </div>
                  <div className="form-group form-group-xs row">
                    <label className="col-8 col-form-label">
                      Enable Notifications:
                    </label>
                    <div className="col-4 kt-align-right">
                      <span className="kt-switch kt-switch--success kt-switch--sm">
                        <label>
                          <input
                            type="checkbox"
                            checked="checked"
                            onChange={this.doNothing}
                            name="quick_panel_notifications_1"
                          />
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="form-group form-group-xs row">
                    <label className="col-8 col-form-label">
                      Enable Case Tracking:
                    </label>
                    <div className="col-4 kt-align-right">
                      <span className="kt-switch kt-switch--success kt-switch--sm">
                        <label>
                          <input
                            type="checkbox"
                            name="quick_panel_notifications_2"
                          />
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="form-group form-group-last form-group-xs row">
                    <label className="col-8 col-form-label">
                      Support Portal:
                    </label>
                    <div className="col-4 kt-align-right">
                      <span className="kt-switch kt-switch--success kt-switch--sm">
                        <label>
                          <input
                            type="checkbox"
                            checked="checked"
                            onChange={this.doNothing}
                            name="quick_panel_notifications_2"
                          />
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="kt-separator kt-separator--space-md kt-separator--border-dashed"></div>
                  <div className="kt-heading kt-heading--sm kt-heading--space-sm">
                    Reports
                  </div>
                  <div className="form-group form-group-xs row">
                    <label className="col-8 col-form-label">
                      Generate Reports:
                    </label>
                    <div className="col-4 kt-align-right">
                      <span className="kt-switch kt-switch--sm kt-switch--danger">
                        <label>
                          <input
                            type="checkbox"
                            checked="checked"
                            onChange={this.doNothing}
                            name="quick_panel_notifications_3"
                          />
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="form-group form-group-xs row">
                    <label className="col-8 col-form-label">
                      Enable Report Export:
                    </label>
                    <div className="col-4 kt-align-right">
                      <span className="kt-switch kt-switch--sm kt-switch--danger">
                        <label>
                          <input
                            type="checkbox"
                            name="quick_panel_notifications_3"
                          />
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="form-group form-group-last form-group-xs row">
                    <label className="col-8 col-form-label">
                      Allow Data Collection:
                    </label>
                    <div className="col-4 kt-align-right">
                      <span className="kt-switch kt-switch--sm kt-switch--danger">
                        <label>
                          <input
                            type="checkbox"
                            checked="checked"
                            onChange={this.doNothing}
                            name="quick_panel_notifications_4"
                          />
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="kt-separator kt-separator--space-md kt-separator--border-dashed"></div>
                  <div className="kt-heading kt-heading--sm kt-heading--space-sm">
                    Memebers
                  </div>
                  <div className="form-group form-group-xs row">
                    <label className="col-8 col-form-label">
                      Enable Member singup:
                    </label>
                    <div className="col-4 kt-align-right">
                      <span className="kt-switch kt-switch--sm kt-switch--brand">
                        <label>
                          <input
                            type="checkbox"
                            checked="checked"
                            onChange={this.doNothing}
                            name="quick_panel_notifications_5"
                          />
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="form-group form-group-xs row">
                    <label className="col-8 col-form-label">
                      Allow User Feedbacks:
                    </label>
                    <div className="col-4 kt-align-right">
                      <span className="kt-switch kt-switch--sm kt-switch--brand">
                        <label>
                          <input
                            type="checkbox"
                            name="quick_panel_notifications_5"
                          />
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="form-group form-group-last form-group-xs row">
                    <label className="col-8 col-form-label">
                      Enable Customer Portal:
                    </label>
                    <div className="col-4 kt-align-right">
                      <span className="kt-switch kt-switch--sm kt-switch--brand">
                        <label>
                          <input
                            type="checkbox"
                            checked="checked"
                            onChange={this.doNothing}
                            name="quick_panel_notifications_6"
                          />
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div id="kt_scrolltop" className="kt-scrolltop">
          <i className="fa fa-arrow-up"></i>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
