import React from "react";
import "css/assets/css/style.bundle.css";
import "css/assets/css/demo1/skins/header/base/light.css";
import "css/assets/css/demo1/skins/header/menu/light.css";
import "css/assets/css/demo1/skins/brand/dark.css";
import "css/assets/css/demo1/skins/aside/dark.css";
import "css/assets/css/error.css";
import "css/assets/css/wizard-1.css";
import "css/assets/css/custom.css";
import "./error.css";

const error = props => {
  return (
    <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading">
      <div className="kt-grid kt-grid--ver kt-grid--root">
        <div className="kt-grid__item kt-grid__item--fluid kt-grid  kt-error-v5 kt-grid-item-img">
          <div className="kt-error_container">
            <span className="kt-error_title">
              <h1>Oops!</h1>
            </span>
            <p className="kt-error_subtitle">Something went wrong here.</p>
            <p className="kt-error_description">
              We're working on it and we'll get it fixed
              <br />
              as soon possible.
              <br />
              You can back or use our Help Center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default error;
