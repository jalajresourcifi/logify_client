import React from "react";
import gapImg from "css/assets/img/6.png";
import { Link } from "react-router-dom";
const ProjectData = props => {
  return (
    <>
      <div className="kt-widget4__item">
        <div className="kt-widget4__pic kt-widget4__pic--pic">
          <img alt="" src={gapImg} />
        </div>
        <div className="kt-widget4__info">
          <Link to="" className="kt-widget4__username">
            Anna Strong
          </Link>
          <p className="kt-widget4__text">Visual Designer,Google Inc</p>
        </div>
        <div>
          <span className="kt-badge kt-badge--info kt-badge--inline">
            in process
          </span>
        </div>
      </div>
      <div className="kt-widget4__item">
        <div className="kt-widget4__pic kt-widget4__pic--pic">
          <img alt="" src={gapImg} />
        </div>
        <div className="kt-widget4__info">
          <Link to="" className="kt-widget4__username">
            Milano Esco
          </Link>
          <p className="kt-widget4__text">Product Designer, Apple Inc</p>
        </div>
        <div>
          <span className="kt-badge kt-badge--danger kt-badge--inline">
            Paused
          </span>
        </div>
      </div>
      <div className="kt-widget4__item">
        <div className="kt-widget4__pic kt-widget4__pic--pic">
          <img alt="" src={gapImg} />
        </div>
        <div className="kt-widget4__info">
          <Link to="" className="kt-widget4__username">
            Nick Bold
          </Link>
          <p className="kt-widget4__text">Web Developer, Facebook Inc</p>
        </div>
        <div>
          <span className="kt-badge kt-badge--success kt-badge--inline">
            Completed
          </span>
        </div>
      </div>
      <div className="kt-widget4__item">
        <div className="kt-widget4__pic kt-widget4__pic--pic">
          <img alt="" src={gapImg} />
        </div>
        <div className="kt-widget4__info">
          <Link to="" className="kt-widget4__username">
            Wiltor Delton
          </Link>
          <p className="kt-widget4__text">Project Manager, Amazon Inc</p>
        </div>
        <div>
          <span className="kt-badge kt-badge--info kt-badge--inline">
            in process
          </span>
        </div>
      </div>
      <div className="kt-widget4__item">
        <div className="kt-widget4__pic kt-widget4__pic--pic">
          <img alt="" src={gapImg} />
        </div>
        <div className="kt-widget4__info">
          <Link to="" className="kt-widget4__username">
            Wiltor Delton
          </Link>
          <p className="kt-widget4__text">Project Manager, Amazon Inc</p>
        </div>
        <div>
          <span className="kt-badge kt-badge--warning kt-badge--inline">
            in process
          </span>
        </div>
      </div>
      <div className="kt-widget4__item">
        <div className="kt-widget4__info">
          <Link to="/resources/projects" className="btn btn-sm btn-label-info">
            View More
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectData;
