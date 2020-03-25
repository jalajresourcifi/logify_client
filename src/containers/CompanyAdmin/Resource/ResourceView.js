import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "hoc/Layout/CompanyAdmin/Layout";
import imgcal from "css/assets/img/cal-1.png";
import img100 from "css/assets/img/100_1.jpg";
import img6 from "css/assets/img/6.png";
import "./Resource.css";
class ResourceView extends Component {
  render() {
    return (
      <Layout name="resourceview">
        <div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">

{/* <!-- begin:: Subheader --> */}
<div className="kt-subheader   kt-grid__item" id="kt_subheader">
  <div className="kt-container  kt-container--fluid ">
    <div className="kt-subheader__main">
      <button className="kt-subheader__mobile-toggle kt-subheader__mobile-toggle--left" id="kt_subheader_mobile_toggle"><span></span></button>
      <h3 className="kt-subheader__title">
        Project Manager</h3>
      <span className="kt-subheader__separator kt-hidden"></span>
      <div className="kt-subheader__breadcrumbs">
        <Link to="" className="kt-subheader__breadcrumbs-home"><i className="flaticon2-shelter"></i></Link>
        <span className="kt-subheader__breadcrumbs-separator"></span>
        <Link to="" className="kt-subheader__breadcrumbs-link">
          Resource View </Link>
        
        {/* <!-- <span className="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> --> */}
      </div>
    </div>
    
  </div>
</div>

{/* <!-- end:: Subheader -->

<!-- begin:: Content --> */}
<div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">

  {/* <!--Begin::Dashboard 1-->

  <!--Begin::Row--> */}
  {/* <!-- <div className="row">
    <div className="col-xl-12 order-lg-2 order-xl-1">
      ij
    </div>
  </div> --> */}
  <div className="row">
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
                  <Link to="" className="kt-widget__username kt-hidden">
                    Jason Muller
                    <i className="flaticon2-correct"></i>
                  </Link>
                  <Link to="" className="kt-widget__title">Nexa - Next generation SAAS</Link>
                  <div className="kt-widget__action">
                    <button type="button" className="btn btn-sm btn-upper btn-background">edit resource</button>&nbsp;
                    
                    
                  </div>
                </div>
                <div className="kt-widget__subhead">
                  <Link to=""><i className="flaticon2-new-email"></i>jason@siastudio.com</Link>
                  <Link to=""><i className="flaticon2-calendar-3"></i>Software Developer</Link>
                  <Link to=""><i className="flaticon2-phone"></i>+91-999999999</Link>
                  <Link to=""><i className="flaticon2-calendar-3"></i>Sec 62, Noida</Link>
                </div>
                <div className="kt-widget__info">
                  <div className="kt-widget__desc">
                    I distinguish three main text objektive could be merely to inform people.
                    <br /> A second could be persuade people.You want people to bay objective
                  </div>
                  <div className="kt-widget__progress">
                    <div className="kt-widget__text">
                      Occupancy
                    </div>
                    <div className="progress">
                      <div className="progress-bar kt-bg-success wide-78" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="kt-widget__stats">
                      78%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kt-widget__bottom">
          <div className="kt-widget__item">
            <div className="kt-widget__icon">
              <i className="flaticon-piggy-bank"></i>
            </div>
            <div className="kt-widget__details">
              <span className="kt-widget__title">Status</span>
              <span className="kt-widget__value"><span></span>Active</span>
            </div>
          </div>
          <div className="kt-widget__item">
            <div className="kt-widget__icon">
              <i className="flaticon-piggy-bank"></i>
            </div>
            <div className="kt-widget__details">
              <span className="kt-widget__title">Planned Leaves</span>
              <span className="kt-widget__value"><span></span>No leaves Applied</span>
            </div>
          </div>

          <div className="kt-widget__item">
            <div className="kt-widget__icon">
              <i className="flaticon-pie-chart"></i>
            </div>
            <div className="kt-widget__details">
              <span className="kt-widget__title">Date of Joining</span>
              <span className="kt-widget__value"><span></span>2nd April</span>
            </div>
          </div>
          <div className="kt-widget__item">
            <div className="kt-widget__icon">
              <i className="flaticon-file-2"></i>
            </div>
            <div className="kt-widget__details">
              <span className="kt-widget__title">Availability Duration</span>
              <Link to="" className="kt-widget__value kt-font-brand">4hrs</Link>
            </div>
          </div>
          <div className="kt-widget__item">
            <div className="kt-widget__icon">
              <i className="flaticon-file-2"></i>
            </div>
            <div className="kt-widget__details">
              <span className="kt-widget__title">Skills</span>
            
              <span className="kt-widget__value"><span></span>HTML5, Bootstrap</span>
            </div>
          </div>
          
        </div>
          </div>
        </div>
      </div>

      {/* <!--end:: Widgets/Applications/User/Profile3--> */}
    </div>
  </div>

  {/* <!--Begin::Row--> */}
  <div className="row">
    


    
    
    
    <div className="col-lg-6 col-xl-6">

      {/* <!--begin:: Widgets/Best Sellers--> */}
      <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">
              Work Logs
            </h3>
          </div>
          
        </div>
        <div className="kt-portlet__body">
          <div className="table-responsive worklog-widget">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Task</th>
                    <th>Description</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="first">10-12-2019</td>
                    <td className="second">Think CRM</td>
                    <td>
                      <p>I distinguish three main text objecttives.First, your objective could be.</p>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>10-12-2019</td>
                    <td>Think CRM</td>
                    <td>
                      <p>I distinguish three main text objecttives.First, your objective could be.</p>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>10-12-2019</td>
                    <td>Think CRM</td>
                    <td>
                      <p>I distinguish three main text objecttives.First, your objective could be.</p>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>10-12-2019</td>
                    <td>Think CRM</td>
                    <td>
                      <p>I distinguish three main text objecttives.First, your objective could be.</p>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>10-12-2019</td>
                    <td>Think CRM</td>
                    <td>
                      <p>I distinguish three main text objecttives.First, your objective could be.</p>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>10-12-2019</td>
                    <td>Think CRM</td>
                    <td>
                      <p>I distinguish three main text objecttives.First, your objective could be.</p>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>10-12-2019</td>
                    <td>Think CRM</td>
                    <td>
                      <p>I distinguish three main text objecttives.First, your objective could be.</p>
                    </td>
                    
                  </tr>
                  
                </tbody>
              </table>
              <div className="kt-widget4__info">
                <Link to="./work-logs.html" className="btn btn-sm btn-label-info wide-100per">View More</Link>
              </div>
            </div>
        </div>
      </div>

      {/* <!--end:: Widgets/Best Sellers--> */}
    </div>
    
    
    
    
    
    
    <div className="col-xl-6 col-lg-6">

      {/* <!--begin:: Widgets/Daily Sales--> */}
      <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">
              Calendar
            </h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <div className="dropdown dropdown-inline">
              <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="flaticon-more-1"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-md">

                {/* <!--begin::Nav--> */}
                <ul className="kt-nav">
                  <li className="kt-nav__head">
                    Export Options
                    <span data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Click to learn more...">
                      <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon kt-svg-icon--brand kt-svg-icon--md1">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                          <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"></circle>
                          <rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7" rx="1"></rect>
                          <rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2" height="2" rx="1"></rect>
                        </g>
                      </svg> </span>
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
                        <span className="kt-badge kt-badge--success kt-badge--rounded">5</span>
                      </span>
                    </Link>
                  </li>
                  <li className="kt-nav__separator"></li>
                  <li className="kt-nav__foot">
                    <Link className="btn btn-label-danger btn-bold btn-sm" to="">Upgrade plan</Link>
                    <Link className="btn btn-clean btn-bold btn-sm" to="" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Click to learn more...">Learn more</Link>
                  </li>
                </ul>

                {/* <!--end::Nav--> */}
              </div>
            </div>
          </div>
        </div>
        <div className="kt-widget14">
          <img src={imgcal} width="100%" alt="" />
        </div>
      </div>

      {/* <!--end:: Widgets/Daily Sales--> */}
    </div>

    <div className="col-xl-7 col-lg-6 col-sm-6">

      {/* <!--begin:: Widgets/New Users--> */}
      <div className="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">
              Project List
            </h3>
          </div>
          
        </div>
        <div className="kt-portlet__body">
          <div className="tab-content">
            <div className="tab-pane active" id="kt_widget4_tab1_content">
              <div className="kt-widget4">
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                    <img src={img6} alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="" className="kt-widget4__username">
                      Anna Strong
                    </Link>
                    <p className="kt-widget4__text">
                      Visual Designer,Google Inc
                    </p>
                  </div>
                  <div>
                    <span className="kt-badge kt-badge--info kt-badge--inline">in process</span>
                  </div>
                </div>
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                  <img src={img6} alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="" className="kt-widget4__username">
                      Milano Esco
                    </Link>
                    <p className="kt-widget4__text">
                      Product Designer, Apple Inc
                    </p>
                  </div>
                  <div>
                    <span className="kt-badge kt-badge--danger kt-badge--inline">Paused</span>
                  </div>
                  
                </div>
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                  <img src={img6} alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="" className="kt-widget4__username">
                      Nick Bold
                    </Link>
                    <p className="kt-widget4__text">
                      Web Developer, Facebook Inc
                    </p>
                  </div>
                  <div>
                    <span className="kt-badge kt-badge--warning kt-badge--inline">in process</span>
                  </div>
                </div>
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                  <img src={img6} alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="" className="kt-widget4__username">
                      Wiltor Delton
                    </Link>
                    <p className="kt-widget4__text">
                      Project Manager, Amazon Inc
                    </p>
                  </div>
                  <div>
                    <span className="kt-badge kt-badge--success kt-badge--inline">Completed</span>
                  </div>
                </div>
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                  <img src={img6} alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="" className="kt-widget4__username">
                      Wiltor Delton
                    </Link>
                    <p className="kt-widget4__text">
                      Project Manager, Amazon Inc
                    </p>
                  </div>
                  <div>
                    <span className="kt-badge kt-badge--info kt-badge--inline">in process</span>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>

        
        </div>
      </div>

      {/* <!--end:: Widgets/New Users--> */}
    </div>

    <div className="col-xl-5 col-lg-6 col-sm-6">

      {/* <!--begin:: Widgets/Product Sales--> */}
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
          <div className="kt-portlet__head-toolbar">
            <div className="dropdown dropdown-inline">
              <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="location.href='pm-rating.html'">
                <i className="flaticon-more-1"></i>
              </button>
              
            </div>
          </div>
        </div>
        <div className="kt-portlet__body">
          <div className="kt-widget25">
            
            <div className="kt-widget25__items">
              <div className="kt-widget25__item">
                <span className="kt-widget25__number">

                  3.5
                  
                </span>
                <div className="progress kt-progress--sm">
                  <div className="progress-bar kt-bg-success width63" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>

                </div>
                <span className="kt-widget25__desc">
                  Self Rating

                </span>
              </div>
              
              <div className="kt-widget25__item">
                <span className="kt-widget25__number">
                  2.2
                  
                </span>
                <div className="progress m-progress--sm">
                  <div className="progress-bar kt-bg-danger width54" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="kt-widget25__desc">
                  Manager's Rating
                </span>
              </div>
            </div>

          </div>
          <div className="kt-widget4__info">
            <Link to="pm-rating.html" className="btn btn-sm btn-label-info wide-100per">Edit Rating</Link>
          </div>
        </div>
      </div>

      {/* <!--end:: Widgets/Product Sales--> */}
    </div>
    
  </div>

  {/* <!--End::Row--> */}

  
  
  
  {/* <!--End::Dashboard 1--> */}
</div>

{/* <!-- end:: Content --> */}
</div>
      </Layout>
    );
  }
}

export default ResourceView;
