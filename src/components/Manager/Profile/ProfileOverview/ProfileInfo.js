import React from "react";
import ProfileForm from "./ProfileForm";
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
