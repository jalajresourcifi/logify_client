import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import img100 from "css/assets/img/100_1.jpg";

const Profile = props => {
  const user = useSelector(state => state.auth.user);
  return (
    <>
      <div className="col-xl-12">
        {/* <!--begin:: Widgets/Applications/User/Profile3--> */}
        <div className="kt-portlet kt-portlet--height-fluid">
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
                      to="/companyadmin/profileoverview"
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
                      Designation{" "}
                    </Link>
                    <Link to="">
                      <i className="flaticon2-placeholder"></i>3yrs Exp
                    </Link>
                  </div>
                  <div className="kt-widget__info">
                    <div className="kt-widget__desc">
                      I distinguish three main text objektive could be merely to
                      inform people.
                      <br /> A second could be persuade people.You want people
                      to bay objective
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--end:: Widgets/Applications/User/Profile3--> */}
      </div>
    </>
  );
};

export default Profile;
