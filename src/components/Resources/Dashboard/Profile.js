import React from "react";
import profilePic from "css/assets/img/100_1.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const DashboardProfile = props => {
  const user = useSelector(state => state.auth.user);
  return (
    <>
      <div className="kt-portlet__body">
        <div className="kt-widget kt-widget--user-profile-3">
          <div className="kt-widget__top">
            <div className="kt-widget__media kt-hidden-">
              <img alt="" src={profilePic} />
            </div>
            <div className="kt-widget__pic kt-widget__pic--danger kt-font-danger kt-font-boldest kt-font-light kt-hidden">
              JM
            </div>
            <div className="kt-widget__content">
              <div className="kt-widget__head">
                <Link
                  to="/resources/profileoverview"
                  className="kt-widget__username"
                >
                  {user && user.fullname}
                  <i className="flaticon2-correct"></i>
                </Link>
              </div>
              <div className="kt-widget__subhead">
                <Link to="">
                  <i className="flaticon2-new-email"></i>
                  {user && user.email}
                </Link>
                <Link to="">
                  <i className="flaticon2-calendar-3"></i>
                  Software Developer
                </Link>
                <Link to="">
                  <i className="flaticon2-placeholder"></i>
                  3yrs Exp
                </Link>
              </div>
              <div className="kt-widget__info">
                <div className="kt-widget__desc">
                  I distinguish three main text objektive could be merely to
                  inform people.
                  <br /> A second could be persuade people.You want people to
                  bay objective
                </div>
                <div className="kt-widget__progress">
                  <div className="kt-widget__text">Occupancy</div>
                  <div className="progress kt-progress-hw">
                    <div
                      className="progress-bar kt-bg-success kt-prog-bar"
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
        </div>
      </div>
    </>
  );
};
export default DashboardProfile;
