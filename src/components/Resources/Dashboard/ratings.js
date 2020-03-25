import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
const Ratings = props => {
  return (
    <>
      <div className="col-xl-5 col-lg-5 col-sm-6">
        <div className="kt-portlet kt-portlet--bordered-semi kt-portlet--space kt-portlet--height-fluid">
          <div className="kt-portlet__head">
            <div className="kt-portlet__head-label">
              <h3 className="kt-portlet__head-title">
                Rating
                <span className="stars">
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                </span>
              </h3>
            </div>
          </div>
          <div className="kt-portlet__body">
            <div className="kt-widget25">
              <div className="kt-widget25__items">
                <div className="kt-widget25__item">
                  <span className="kt-widget25__number">3.5</span>
                  <div className="progress kt-progress--sm">
                    <div
                      className="progress-bar kt-bg-success width63"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span className="kt-widget25__desc">Self Rating</span>
                </div>

                <div className="kt-widget25__item">
                  <span className="kt-widget25__number">2.2</span>
                  <div className="progress m-progress--sm">
                    <div
                      className="progress-bar kt-bg-danger width54"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span className="kt-widget25__desc">Manager's Rating</span>
                </div>
              </div>
            </div>
            <div className="kt-widget4__info">
              <Link
                to="/resources/rating"
                className="btn btn-sm btn-label-info wide-100per"
              >
                Rate Yourself
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratings;
