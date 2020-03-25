import React, { useEffect } from "react";
import img6 from "css/assets/img/6.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showAllProject } from "redux/actions/project";

function ProjectList() {
  const dispatch = useDispatch();
  const projectList = useSelector(state => state.project.list);
  useEffect(() => {
    dispatch(showAllProject());
  }, []);
  return (
    <>
      {console.table(projectList)}
      {projectList.map((project, index) => {
        return (
          <div className="col-xl-4 col-lg-6" key={index}>
            <div className="kt-portlet kt-portlet--height-fluid">
              <div className="kt-portlet__body kt-portlet__body--fit">
                <div className="kt-widget kt-widget--project-1">
                  <div className="kt-widget__head">
                    <div className="kt-widget__label">
                      <div className="kt-widget__media">
                        <span className="kt-userpic kt-userpic--lg kt-userpic--circle">
                          <img alt="" src={img6} />
                        </span>
                      </div>
                      <div className="kt-widget__info">
                        <Link to="" className="kt-widget__title">
                          {project.project_name}
                        </Link>
                        <span className="kt-widget__desc">
                          Creates Limitless possibilities
                        </span>
                      </div>
                    </div>
                    <div className="kt-portlet__head-toolbar">
                      <Link
                        to=""
                        className="btn btn-clean btn-sm btn-icon btn-icon-md"
                        data-toggle="dropdown"
                      >
                        <i className="flaticon-more-1"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right">
                        <ul className="kt-nav">
                          <li className="kt-nav__item">
                            <Link to="" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-line-chart"></i>
                              <span className="kt-nav__link-text">Reports</span>
                            </Link>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-send"></i>
                              <span className="kt-nav__link-text">
                                Messages
                              </span>
                            </Link>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                              <span className="kt-nav__link-text">Charts</span>
                            </Link>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-avatar"></i>
                              <span className="kt-nav__link-text">Members</span>
                            </Link>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-settings"></i>
                              <span className="kt-nav__link-text">
                                Settings
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget__body">
                    <div className="kt-widget__stats">
                      <div className="kt-widget__item">
                        <span className="kt-widget__date">Start Date</span>
                        <div className="kt-widget__label">
                          <span className="btn btn-label-brand btn-sm btn-bold btn-upper">
                            07 may, 18
                          </span>
                        </div>
                      </div>
                      <div className="kt-widget__item">
                        <span className="kt-widget__date">Due Date</span>
                        <div className="kt-widget__label">
                          <span className="btn btn-label-danger btn-sm btn-bold btn-upper">
                            07 0ct, 18
                          </span>
                        </div>
                      </div>
                      <div className="kt-widget__item flex-fill">
                        <span className="kt-widget__subtitel">Progress</span>
                        <div className="kt-widget__progress d-flex  align-items-center">
                          <div className="progress progress-hw">
                            <div
                              className="progress-bar kt-bg-danger"
                              role="progressbar"
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span className="kt-widget__stat">20%</span>
                        </div>
                      </div>
                    </div>
                    <span className="kt-widget__text">
                      I distinguish three main text objecttives.First, your
                      objective could be merely to inform people.A second be to
                      persuade people.
                    </span>
                  </div>
                  <div className="kt-widget__footer">
                    <div className="kt-widget__wrapper">
                      <div className="kt-widget__section"></div>
                      <div className="kt-widget__section">
                        <Link to="/manager/projects/1">
                          <button
                            type="button"
                            className="btn btn-brand btn-sm btn-upper btn-bold"
                          >
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectList;
